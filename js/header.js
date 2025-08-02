// Quando a pessoa digita e pressiona Enter, faz busca no Google
function buscarGoogle(event) {
  event.preventDefault();
  const termo = document.getElementById("campoBusca").value.trim();
  if (termo !== "") {
    const query = encodeURIComponent(termo + " site:.gov.br OR site:.edu.br");
    window.open("https://www.google.com/search?q=" + query, "_blank");
  }
}

// Listas de sugestões fixas
const faculdades = [
  "Universidade de São Paulo (USP)",
  "Universidade Estadual de Campinas (UNICAMP)",
  "Universidade Federal do Rio de Janeiro (UFRJ)",
  "Universidade Federal de Minas Gerais (UFMG)",
  "Universidade Federal de Pernambuco (UFPE)",
  "Universidade Estadual Paulista (UNESP)",
  "Universidade de Brasília (UnB)",
  "Pontifícia Universidade Católica de São Paulo (PUC-SP)",
  "Instituto Federal de São Paulo (IFSP)",
  "Fundação Getúlio Vargas (FGV)"
];

const escolas = [
  "Escola Estadual Paulo Freire",
  "Escola Municipal Monteiro Lobato",
  "Colégio Pedro II - RJ",
  "Escola Técnica Estadual (ETEC)",
  "Instituto Federal de Educação - IFSP",
  "Colégio Militar de Brasília",
  "Centro Educacional SESI",
  "Colégio Tiradentes da PM",
  "Colégio Técnico da Unicamp (COTUCA)",
  "Colégio de Aplicação da UFPE"
];

const concursos = [
  "Concurso INSS",
  "Concurso Banco do Brasil",
  "Concurso Polícia Federal (PF)",
  "Concurso Polícia Rodoviária Federal (PRF)",
  "Concurso Receita Federal",
  "Concurso Tribunal de Justiça (TJ)",
  "Concurso Polícia Civil",
  "Concurso Ministério da Educação (MEC)",
  "Concurso IBGE",
  "Concurso Correios"
];

// Junta e remove duplicados
const sugestoesFixas = [...new Set([...faculdades, ...escolas, ...concursos])];

// Debounce para evitar chamadas excessivas
let debounceTimeout;
document.getElementById("campoBusca").addEventListener("input", function () {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(() => {
    buscarSugestoes(this.value.trim());
  }, 300);
});

// Gera sugestões baseadas no termo digitado
function buscarSugestoes(termo) {
  const container = document.getElementById("sugestoes");
  container.innerHTML = "";
  if (termo.length < 3) return;

  const sugestoesFiltradas = sugestoesFixas.filter(nome =>
    nome.toLowerCase().includes(termo.toLowerCase())
  );

  sugestoesFiltradas.slice(0, 8).forEach(nome => {
    const item = document.createElement("button");
    item.className = "list-group-item list-group-item-action";
    item.textContent = nome;
    item.type = "button";
    item.onclick = () => {
      document.getElementById("campoBusca").value = nome;
      container.innerHTML = "";
    };
    container.appendChild(item);
  });
}

// Fecha sugestões ao clicar fora da barra
document.addEventListener("click", function (e) {
  const container = document.getElementById("sugestoes");
  if (!document.querySelector(".search-bar").contains(e.target)) {
    container.innerHTML = "";
  }
});