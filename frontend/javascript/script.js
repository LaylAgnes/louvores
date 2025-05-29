document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    menu.classList.toggle("show");
  });
  const indiceToggle = document.getElementById("indice-toggle");
  const indiceMenu = document.getElementById("indice-menu");

  indiceToggle.addEventListener("click", () => {
    indiceMenu.classList.toggle("hidden");
  });
});
