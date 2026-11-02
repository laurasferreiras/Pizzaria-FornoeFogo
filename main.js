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

// ===== CARDÁPIO =====
const pizzas = [
  { nome: 'Pizza Margherita', categoria: 'tradicionais', descricao: 'Massa de longa fermentação, molho de tomate artesanal e queijo mozzarella.', preco: 35 },
  { nome: 'Pizza Calabresa', categoria: 'tradicionais', descricao: 'Massa de longa fermentação, molho de tomate artesanal, queijo mozzarella e calabresa fatiada.', preco: 38 },
  { nome: 'Pizza Portuguesa', categoria: 'tradicionais', descricao: 'Massa de longa fermentação, molho de tomate artesanal, queijo mozzarella, presunto, ovos e azeitonas.', preco: 42 },
  { nome: 'Pizza Pepperoni', categoria: 'especiais', descricao: 'Massa de longa fermentação, molho de tomate artesanal, queijo mozzarella e pepperoni.', preco: 40 },
  { nome: 'Pizza Quatro Queijos', categoria: 'especiais', descricao: 'Massa de longa fermentação, molho de tomate artesanal e uma combinação de quatro queijos.', preco: 45 },
  { nome: 'Pizza Frango com Catupiry', categoria: 'especiais', descricao: 'Massa de longa fermentação, frango desfiado temperado e catupiry cremoso.', preco: 44 },
  { nome: 'Pizza Chocolate com Morango', categoria: 'doces', descricao: 'Massa de longa fermentação, chocolate ao leite derretido e morangos frescos.', preco: 39 },
  { nome: 'Pizza Banana com Canela', categoria: 'doces', descricao: 'Massa de longa fermentação, banana caramelizada, açúcar e canela.', preco: 36 },
];

const grid = document.querySelector('#menu-grid');
const filtros = document.querySelectorAll('.filtro');

function formatarPreco(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function mostrarPizzas(categoria) {
  const lista = categoria === 'todas'
    ? pizzas
    : pizzas.filter((pizza) => pizza.categoria === categoria);

  grid.innerHTML = lista.map((pizza) => `
    <article class="pizza-card">
      <h3>${pizza.nome}</h3>
      <p>${pizza.descricao}</p>
      <span class="price">${formatarPreco(pizza.preco)}</span>
    </article>
  `).join('');
}

filtros.forEach((botao) => {
  botao.addEventListener('click', () => {
    filtros.forEach((b) => b.classList.remove('ativo'));
    botao.classList.add('ativo');
    mostrarPizzas(botao.dataset.categoria);
  });
});

mostrarPizzas('todas');