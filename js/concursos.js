const collapseElement = document.getElementById("videoConcurso");
const icon = document.getElementById("seta-icone");

if (collapseElement && icon) {
  collapseElement.addEventListener("show.bs.collapse", () => {
    icon.style.transform = "rotate(180deg)";
  });

  collapseElement.addEventListener("hide.bs.collapse", () => {
    icon.style.transform = "rotate(0deg)";
  });
}