const botaoMenu = document.querySelector(".menu-toggle");
const menu = document.querySelector("#menu");

function fecharMenu() {
  menu.classList.remove("aberto");
  botaoMenu.setAttribute("aria-expanded", "false");
  botaoMenu.textContent = "☰";
}

botaoMenu.addEventListener("click", () => {
  const aberto = menu.classList.toggle("aberto");
  botaoMenu.setAttribute("aria-expanded", aberto);
  botaoMenu.textContent = aberto ? "✖" : "☰";
});

menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", fecharMenu);
});