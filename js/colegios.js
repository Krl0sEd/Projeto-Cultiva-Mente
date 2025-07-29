document.addEventListener("DOMContentLoaded", function () {
  if (!navigator.geolocation) {
    alert("Geolocalização não suportada");
    return;
  }

  // Função que gera o caminho para o ícone baseado no nome da escola
  function gerarCaminhoDoIcone(nomeEscola) {
    const nomeFormatado = nomeEscola
      .replace(/[\/\\:*?"<>|]/g, "") // remove caracteres inválidos
      .trim();
    return `../assets/icones-escolas/${nomeFormatado}.png`;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;

      const map = L.map("map").setView([latitude, longitude], 15);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker([latitude, longitude])
        .addTo(map)
        .bindPopup("Você está aqui!")
        .openPopup();

      // Função auxiliar para adicionar escola ao mapa
      function adicionarEscolaAoMapa(lat, lon, iconUrl, popupContent) {
        const icon = L.icon({
          iconUrl,
          iconSize: [40, 40],
          iconAnchor: [20, 40],
          popupAnchor: [0, -40],
          className: "school-icon",
        });

        L.marker([lat, lon], { icon }).addTo(map).bindPopup(popupContent);
      }

      const overpassUrl = `https://overpass-api.de/api/interpreter?data=[out:json];(
        node["amenity"="school"](around:3000,${latitude},${longitude});
        way["amenity"="school"](around:3000,${latitude},${longitude});
        relation["amenity"="school"](around:3000,${latitude},${longitude});
      );out center tags;`;

      fetch(overpassUrl)
        .then((response) => response.json())
        .then((data) => {
          if (!data.elements || data.elements.length === 0) {
            alert("Nenhuma escola pública encontrada nas proximidades.");
            return;
          }

          data.elements.forEach((el) => {
            const lat = el.lat || el.center?.lat;
            const lon = el.lon || el.center?.lon;
            if (!lat || !lon) return;

            const tags = el.tags || {};
            const nome = tags.name || "Escola sem nome";

            const rua = tags["addr:street"] || "";
            const numero = tags["addr:housenumber"] || "";
            const cidade = tags["addr:city"] || "";

            const endereco = `${rua}${numero ? ", " + numero : ""}${cidade ? " - " + cidade : ""}`;

            const imagemEscola = gerarCaminhoDoIcone(nome);
            const fallbackIcone = "assets/school_png.avif";

            const popupContent = `
              <strong>${nome}</strong><br>
              ${endereco || "Endereço não informado"}<br>
              <img src="${imagemEscola}" alt="${nome}" width="100" style="margin-top:5px; border-radius:8px;" onerror="this.src='${fallbackIcone}'">
            `;

            adicionarEscolaAoMapa(lat, lon, fallbackIcone, popupContent);
          });
        })
        .catch((err) => {
          console.error("Erro ao buscar escolas:", err);
          alert("Não foi possível buscar as escolas.");
        });
    },
    () => {
      alert("Erro: não foi possível obter sua localização.");
    }
  );
});
