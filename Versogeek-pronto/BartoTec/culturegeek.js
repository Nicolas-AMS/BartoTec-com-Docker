document.addEventListener('DOMContentLoaded', function() {
  const produtosContainer = document.getElementById('produtos-container');
  const categorias = document.querySelectorAll('#lista-categorias a');
  const searchInput = document.querySelector('.search-container input');

  let pagina = 1;
  const produtosPorPagina = 6;
  let produtosAtuais = [];
  let termoAtual = "";

  // 🔹 Função principal: carregar produtos
  async function carregarProdutos(termo = "", append = false) {
    if (!append) {
      produtosContainer.innerHTML = `<p style="text-align:center;color:#7FB6F5;">Carregando produtos...</p>`;
      pagina = 1;
    }

    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();

      // Filtra produtos pelo termo ou categoria
      const produtosFiltrados = termo
        ? data.filter(produto =>
            produto.title.toLowerCase().includes(termo.toLowerCase()) ||
            produto.category.toLowerCase().includes(termo.toLowerCase())
          )
        : data;

      if (!produtosFiltrados.length) {
        produtosContainer.innerHTML = `<p style="text-align:center;color:#ccc;">Nenhum produto encontrado 😕</p>`;
        return;
      }

      produtosAtuais = produtosFiltrados;
      const inicio = (pagina - 1) * produtosPorPagina;
      const fim = pagina * produtosPorPagina;
      const produtosPagina = produtosAtuais.slice(inicio, fim);

      if (!append) produtosContainer.innerHTML = '';

      // Cria cards dos produtos
      produtosPagina.forEach(produto => {
        const card = document.createElement('div');
        card.classList.add('promo-card');

        const image = produto.image || 'https://via.placeholder.com/250x250?text=Sem+Imagem';
        const title = produto.title || 'Produto sem título';
        const category = produto.category || 'Categoria';
        const price = produto.price ? `R$ ${produto.price.toFixed(2)}` : 'Preço indisponível';
        const link = `https://fakestoreapi.com/products/${produto.id}`;

        card.innerHTML = `
          <div class="promo-img">
            <img src="${image}" alt="${title}">
          </div>
          <div class="promo-content">
            <h3>${title}</h3>
            <p>${category}</p>
            <div class="promo-price">
              <span class="new-price">${price}</span>
            </div>
            <a href="${link}" class="btn" target="_blank">Ver Produto</a>
          </div>
        `;
        produtosContainer.appendChild(card);
      });

      // 🔘 Botão "Carregar mais"
      if (!document.getElementById('carregar-mais')) {
        const botaoMais = document.createElement("button");
        botaoMais.textContent = "Carregar mais";
        botaoMais.id = "carregar-mais";
        Object.assign(botaoMais.style, {
          display: "block",
          margin: "30px auto",
          padding: "10px 20px",
          borderRadius: "10px",
          background: "#7FB6F5",
          color: "#1B013E",
          fontWeight: "bold",
          cursor: "pointer",
          border: "none",
          transition: "transform 0.3s"
        });
        produtosContainer.insertAdjacentElement("afterend", botaoMais);

        botaoMais.addEventListener("click", () => {
          pagina++;
          carregarProdutos(termoAtual, true);
        });
      }

      const botaoMais = document.getElementById('carregar-mais');
      botaoMais.style.display = fim >= produtosAtuais.length ? 'none' : 'block';

    } catch (erro) {
      console.error("Erro ao carregar produtos:", erro);
      produtosContainer.innerHTML = `<p style="text-align:center;color:red;">Erro ao carregar produtos 😕</p>`;
    }
  }

  // 🔄 Carrega produtos iniciais
  carregarProdutos();

  // 🕹️ Filtro por categoria
  categorias.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      termoAtual = link.getAttribute('data-category');
      searchInput.value = ""; // limpa a barra de pesquisa
      carregarProdutos(termoAtual);
    });
  });

  // 🔍 Pesquisa ao pressionar Enter
  searchInput.addEventListener('keyup', e => {
    if (e.key === 'Enter') {
      termoAtual = searchInput.value.trim();
      carregarProdutos(termoAtual);
    }
  });

  // 🔎 Pesquisa em tempo real enquanto digita
  let timeout;
  searchInput.addEventListener('input', () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      termoAtual = searchInput.value.trim();
      carregarProdutos(termoAtual);
    }, 300);
  });
});

