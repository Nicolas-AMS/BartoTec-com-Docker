document.addEventListener('DOMContentLoaded', function() {
  const noticiasContainer = document.getElementById('noticia-container');
  const searchInput = document.querySelector('.search-container input');
  let pagina = 1;
  const noticiasPorPagina = 3;
  let termoAtual = "";
  const todasNoticias = [
    {
      id: 1,
      titulo: "'Marvel's Deadpool VR' revela trailer oficial da história e data de lançamento na Gamescom 2025",
      descricao: "Acabamos de revelar na Opening Night Live da Gamescom: confira todos os novos detalhes de 'Marvel's Deadpool VR'!",
      data: "2025-10-20",
      autor: "Carlos Silva",
      categoria: "Filmes & Séries",
      url: "https://www.marvel.com/articles/games/marvels-deadpool-vr-reveals-official-story-trailer-release-date-gamescom-2025",
    },
    {
      id: 2,
      titulo: "Como obter a Dawn Stone e todos os Pokémon que ela evolui em Pokémon Legends Z-A",
      descricao: "Item importante para evoluir certos monstrinhos",
      data: "2025-10-18",
      autor: "Ana Costa",
      categoria: "Games",
      url: "https://br.ign.com/pokemon-legends-z-a/147345/feature/como-obter-a-dawn-stone-e-todos-os-pokemon-que-ela-evolui-em-pokemon-legends-z-a",
    },
    {
      id: 3,
      titulo: "Comic-Con 2025 promete painéis históricos",
      descricao: "A convenção de cultura pop mais famosa do mundo retorna com grandes novidades.",
      data: "2025-10-16",
      autor: "Pedro Almeida",
      categoria: "Eventos",
      url: "https://www.comic-con.org",
    },
    {
      id: 4,
      titulo: "One Piece bate recorde de audiência mundial",
      descricao: "O episódio 1100 da série atraiu milhões de espectadores em seu lançamento.",
      data: "2025-10-12",
      autor: "Marina Lopes",
      categoria: "Animes",
      url: "https://www.crunchyroll.com/pt-br/news",
    },
    {
      id: 5,
      titulo: "Intel lança chip gamer de nova geração",
      descricao: "O processador promete dobrar o desempenho em jogos AAA e reduzir o consumo de energia.",
      data: "2025-10-10",
      autor: "Lucas Pereira",
      categoria: "Tecnologia",
      url: "https://www.theverge.com/tech",
    },
    {
      id: 6,
      titulo: "HQs clássicas da Marvel ganham relançamento digital",
      descricao: "Versões 4K de histórias icônicas estarão disponíveis para colecionadores.",
      data: "2025-10-08",
      autor: "Julia Ramos",
      categoria: "HQ's & Mangás",
      url: "https://comicbook.com/marvel",
    },
    {
      id: 7,
      titulo: "Novo jogo de Zelda é anunciado pela Nintendo",
      descricao: "O título promete um mundo ainda maior e novas mecânicas de exploração.",
      data: "2025-10-05",
      autor: "Felipe Duarte",
      categoria: "Games",
      url: "https://www.nintendo.com/zelda",
    },
    {
      id: 8,
      titulo: "Netflix revela trailer da série de The Witcher: Nova Era",
      descricao: "A produção apresentará uma nova linhagem de bruxos e ambientação inédita.",
      data: "2025-10-03",
      autor: "Paula Torres",
      categoria: "Filmes & Séries",
      url: "https://www.netflix.com/br/title/80189685",
    },
    {
      id: 9,
      titulo: "Dragon Ball Super confirma nova temporada",
      descricao: "A Toei Animation promete mais batalhas épicas e personagens inéditos.",
      data: "2025-09-30",
      autor: "André Kimura",
      categoria: "Animes",
      url: "https://www.crunchyroll.com/pt-br/news",
    },
    {
      id: 10,
      titulo: "Apple apresenta headset voltado para jogos",
      descricao: "O novo Apple Vision Pro terá integração total com títulos AAA e realidade mista.",
      data: "2025-09-25",
      autor: "Renata Gomes",
      categoria: "Tecnologia",
      url: "https://www.theverge.com/apple",
    },
    {
      id: 11,
      titulo: "Batman receberá nova HQ escrita por Neil Gaiman",
      descricao: "A DC Comics promete uma trama sombria e filosófica no novo arco do Cavaleiro das Trevas.",
      data: "2025-09-22",
      autor: "Leandro Rocha",
      categoria: "HQ's & Mangás",
      url: "https://www.dc.com/news",
    },
    {
      id: 12,
      titulo: "Final Fantasy XVII entra em desenvolvimento",
      descricao: "Square Enix confirma o início da produção do novo capítulo da saga.",
      data: "2025-09-20",
      autor: "João Lima",
      categoria: "Games",
      url: "https://www.ign.com/articles/final-fantasy-17",
    },
    {
      id: 13,
      titulo: "My Hero Academia encerra sua jornada no mangá",
      descricao: "Autor confirma o último arco e agradece aos fãs pelo apoio de quase uma década.",
      data: "2025-09-18",
      autor: "Bruno Takahashi",
      categoria: "HQ's & Mangás",
      url: "https://www.crunchyroll.com/pt-br/news",
    },
    {
      id: 14,
      titulo: "The Mandalorian ganha derivado focado em Bo-Katan",
      descricao: "Disney+ confirma série spin-off do universo Star Wars para 2026.",
      data: "2025-09-15",
      autor: "Camila Souza",
      categoria: "Filmes & Séries",
      url: "https://www.starwars.com",
    },
    {
      id: 15,
      titulo: "Cyberpunk 2077 recebe expansão gratuita",
      descricao: "A CD Projekt Red adiciona novos modos e missões ao jogo de sucesso.",
      data: "2025-09-10",
      autor: "Eduardo Martins",
      categoria: "Games",
      url: "https://www.ign.com/games/cyberpunk-2077",
    },
    {
      id: 16,
      titulo: "Attack on Titan ganha documentário especial",
      descricao: "A Crunchyroll lançará um especial celebrando 10 anos do anime.",
      data: "2025-09-08",
      autor: "Lívia Han",
      categoria: "Animes",
      url: "https://www.crunchyroll.com/pt-br/news",
    },
    {
      id: 17,
      titulo: "Microsoft apresenta nova linha de notebooks gamers",
      descricao: "A série Surface X promete unir desempenho e portabilidade para jogadores exigentes.",
      data: "2025-09-06",
      autor: "Rafael Monteiro",
      categoria: "Tecnologia",
      url: "https://www.theverge.com/microsoft",
    },
    {
      id: 18,
      titulo: "Marvel prepara nova saga dos Vingadores nos quadrinhos",
      descricao: "Nova equipe será formada após o evento Guerra Multiversal.",
      data: "2025-09-04",
      autor: "Thiago Nunes",
      categoria: "HQ's & Mangás",
      url: "https://comicbook.com/marvel",
    },
    {
      id: 19,
      titulo: "E3 2025 é oficialmente cancelada",
      descricao: "Maior feira de games do mundo é substituída por eventos digitais independentes.",
      data: "2025-09-02",
      autor: "Gustavo Pires",
      categoria: "Eventos",
      url: "https://www.ign.com/articles/e3-2025-cancelled",
    },
    {
      id: 20,
      titulo: "Duna: Parte 3 é confirmada pela Warner Bros.",
      descricao: "O diretor Denis Villeneuve retorna para concluir a trilogia de ficção científica.",
      data: "2025-09-01",
      autor: "Natália Vieira",
      categoria: "Filmes & Séries",
      url: "https://www.warnerbros.com",
     
    }
  ];

  // 🧠 Função principal para exibir notícias
  function carregarNoticias(termo = "", append = false) {
    if (!append) {
      noticiasContainer.innerHTML = `<p style="text-align:center;color:#7FB6F5;">Carregando notícias...</p>`;
      pagina = 1;
    }

    // Filtra por termo (busca no título, descrição ou categoria)
    const filtradas = todasNoticias.filter(noticia =>
      noticia.titulo.toLowerCase().includes(termo.toLowerCase()) ||
      noticia.descricao.toLowerCase().includes(termo.toLowerCase()) ||
      noticia.categoria.toLowerCase().includes(termo.toLowerCase())
    );

    if (!filtradas.length) {
      noticiasContainer.innerHTML = `<p style="text-align:center;color:#ccc;">Nenhuma notícia encontrada 😕</p>`;
      return;
    }

    const inicio = (pagina - 1) * noticiasPorPagina;
    const fim = pagina * noticiasPorPagina;
    const paginaNoticias = filtradas.slice(inicio, fim);

    if (!append) noticiasContainer.innerHTML = "";

    paginaNoticias.forEach(noticia => {
      const card = document.createElement('div');
      card.classList.add('noticia-card');
      card.innerHTML = `
        
        <div class="noticia-content">
          <h3>${noticia.titulo}</h3>
          <p>${noticia.descricao}</p>
          <div class="noticia-meta">
            <span><i class="far fa-calendar"></i> ${new Date(noticia.data).toLocaleDateString('pt-BR')}</span>
            <span><i class="far fa-user"></i> ${noticia.autor}</span>
          </div>
          <a href="${noticia.url}" target="_blank" style="color:#2a0474b3;">Leia mais →</a>
        </div>
      `;
      noticiasContainer.appendChild(card);
    });

   
  }

 
  carregarNoticias();

  // 🔍 Pesquisa (Enter)
  searchInput.addEventListener('keyup', e => {
    if (e.key === 'Enter') {
      termoAtual = searchInput.value.trim();
      carregarNoticias(termoAtual);
    }
  });

  // Botão "Carregar mais"
  
});

document.addEventListener('DOMContentLoaded', function() {
  const produtosContainer = document.getElementById('produtos-container');
  const categorias = document.querySelectorAll('#lista-categorias a');
  const searchInput = document.querySelector('.search-container input');

  let pagina = 1;
  const produtosPorPagina = 3;
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

document.addEventListener('DOMContentLoaded', function() {
  const noticiasContainer = document.getElementById('noticias-container');
  const searchInput = document.querySelector('.search-container input');
  let pagina = 1;
  const noticiasPorPagina = 3;
  let termoAtual = "";
  const todasNoticias = [
    {
      id: 1,
      titulo: "Marvel confirma novo filme do Homem-Aranha",
      descricao: "Tom Holland retorna ao papel em uma nova fase do Universo Cinematográfico da Marvel.",
      data: "2025-10-20",
      autor: "Carlos Silva",
      categoria: "Filmes & Séries",
      url: "https://www.marvel.com/articles/movies/spider-man-next-movie",
    },
    {
      id: 2,
      titulo: "Sony prepara sucessor do PlayStation 5",
      descricao: "Novo console deve apostar em IA e integração total com a nuvem.",
      data: "2025-10-18",
      autor: "Ana Costa",
      categoria: "Games",
      url: "https://www.ign.com/articles/sony-playstation-6-rumors",
    },
    {
      id: 3,
      titulo: "Comic-Con 2025 promete painéis históricos",
      descricao: "A convenção de cultura pop mais famosa do mundo retorna com grandes novidades.",
      data: "2025-10-16",
      autor: "Pedro Almeida",
      categoria: "Eventos",
      url: "https://www.comic-con.org",
    },
    {
      id: 4,
      titulo: "One Piece bate recorde de audiência mundial",
      descricao: "O episódio 1100 da série atraiu milhões de espectadores em seu lançamento.",
      data: "2025-10-12",
      autor: "Marina Lopes",
      categoria: "Animes",
      url: "https://www.crunchyroll.com/pt-br/news",
    },
    {
      id: 5,
      titulo: "Intel lança chip gamer de nova geração",
      descricao: "O processador promete dobrar o desempenho em jogos AAA e reduzir o consumo de energia.",
      data: "2025-10-10",
      autor: "Lucas Pereira",
      categoria: "Tecnologia",
      url: "https://www.theverge.com/tech",
    },
    {
      id: 6,
      titulo: "HQs clássicas da Marvel ganham relançamento digital",
      descricao: "Versões 4K de histórias icônicas estarão disponíveis para colecionadores.",
      data: "2025-10-08",
      autor: "Julia Ramos",
      categoria: "HQ's & Mangás",
      url: "https://comicbook.com/marvel",
    },
    {
      id: 7,
      titulo: "Novo jogo de Zelda é anunciado pela Nintendo",
      descricao: "O título promete um mundo ainda maior e novas mecânicas de exploração.",
      data: "2025-10-05",
      autor: "Felipe Duarte",
      categoria: "Games",
      url: "https://www.nintendo.com/zelda",
    },
    {
      id: 8,
      titulo: "Netflix revela trailer da série de The Witcher: Nova Era",
      descricao: "A produção apresentará uma nova linhagem de bruxos e ambientação inédita.",
      data: "2025-10-03",
      autor: "Paula Torres",
      categoria: "Filmes & Séries",
      url: "https://www.netflix.com/br/title/80189685",
    },
    {
      id: 9,
      titulo: "Dragon Ball Super confirma nova temporada",
      descricao: "A Toei Animation promete mais batalhas épicas e personagens inéditos.",
      data: "2025-09-30",
      autor: "André Kimura",
      categoria: "Animes",
      url: "https://www.crunchyroll.com/pt-br/news",
    },
    {
      id: 10,
      titulo: "Apple apresenta headset voltado para jogos",
      descricao: "O novo Apple Vision Pro terá integração total com títulos AAA e realidade mista.",
      data: "2025-09-25",
      autor: "Renata Gomes",
      categoria: "Tecnologia",
      url: "https://www.theverge.com/apple",
    },
    {
      id: 11,
      titulo: "Batman receberá nova HQ escrita por Neil Gaiman",
      descricao: "A DC Comics promete uma trama sombria e filosófica no novo arco do Cavaleiro das Trevas.",
      data: "2025-09-22",
      autor: "Leandro Rocha",
      categoria: "HQ's & Mangás",
      url: "https://www.dc.com/news",
    },
    {
      id: 12,
      titulo: "Final Fantasy XVII entra em desenvolvimento",
      descricao: "Square Enix confirma o início da produção do novo capítulo da saga.",
      data: "2025-09-20",
      autor: "João Lima",
      categoria: "Games",
      url: "https://www.ign.com/articles/final-fantasy-17",
    },
    {
      id: 13,
      titulo: "My Hero Academia encerra sua jornada no mangá",
      descricao: "Autor confirma o último arco e agradece aos fãs pelo apoio de quase uma década.",
      data: "2025-09-18",
      autor: "Bruno Takahashi",
      categoria: "HQ's & Mangás",
      url: "https://www.crunchyroll.com/pt-br/news",
    },
    {
      id: 14,
      titulo: "The Mandalorian ganha derivado focado em Bo-Katan",
      descricao: "Disney+ confirma série spin-off do universo Star Wars para 2026.",
      data: "2025-09-15",
      autor: "Camila Souza",
      categoria: "Filmes & Séries",
      url: "https://www.starwars.com",
    },
    {
      id: 15,
      titulo: "Cyberpunk 2077 recebe expansão gratuita",
      descricao: "A CD Projekt Red adiciona novos modos e missões ao jogo de sucesso.",
      data: "2025-09-10",
      autor: "Eduardo Martins",
      categoria: "Games",
      url: "https://www.ign.com/games/cyberpunk-2077",
    },
    {
      id: 16,
      titulo: "Attack on Titan ganha documentário especial",
      descricao: "A Crunchyroll lançará um especial celebrando 10 anos do anime.",
      data: "2025-09-08",
      autor: "Lívia Han",
      categoria: "Animes",
      url: "https://www.crunchyroll.com/pt-br/news",
    },
    {
      id: 17,
      titulo: "Microsoft apresenta nova linha de notebooks gamers",
      descricao: "A série Surface X promete unir desempenho e portabilidade para jogadores exigentes.",
      data: "2025-09-06",
      autor: "Rafael Monteiro",
      categoria: "Tecnologia",
      url: "https://www.theverge.com/microsoft",
    },
    {
      id: 18,
      titulo: "Marvel prepara nova saga dos Vingadores nos quadrinhos",
      descricao: "Nova equipe será formada após o evento Guerra Multiversal.",
      data: "2025-09-04",
      autor: "Thiago Nunes",
      categoria: "HQ's & Mangás",
      url: "https://comicbook.com/marvel",
    },
    {
      id: 19,
      titulo: "E3 2025 é oficialmente cancelada",
      descricao: "Maior feira de games do mundo é substituída por eventos digitais independentes.",
      data: "2025-09-02",
      autor: "Gustavo Pires",
      categoria: "Eventos",
      url: "https://www.ign.com/articles/e3-2025-cancelled",
    },
    {
      id: 20,
      titulo: "Duna: Parte 3 é confirmada pela Warner Bros.",
      descricao: "O diretor Denis Villeneuve retorna para concluir a trilogia de ficção científica.",
      data: "2025-09-01",
      autor: "Natália Vieira",
      categoria: "Filmes & Séries",
      url: "https://www.warnerbros.com",
     
    }
  ];

  // 🧠 Função principal para exibir notícias
  function carregarNoticias(termo = "", append = false) {
    if (!append) {
      noticiasContainer.innerHTML = `<p style="text-align:center;color:#7FB6F5;">Carregando notícias...</p>`;
      pagina = 1;
    }

    // Filtra por termo (busca no título, descrição ou categoria)
    const filtradas = todasNoticias.filter(noticia =>
      noticia.titulo.toLowerCase().includes(termo.toLowerCase()) ||
      noticia.descricao.toLowerCase().includes(termo.toLowerCase()) ||
      noticia.categoria.toLowerCase().includes(termo.toLowerCase())
    );

    if (!filtradas.length) {
      noticiasContainer.innerHTML = `<p style="text-align:center;color:#ccc;">Nenhuma notícia encontrada 😕</p>`;
      return;
    }

    const inicio = (pagina - 1) * noticiasPorPagina;
    const fim = pagina * noticiasPorPagina;
    const paginaNoticias = filtradas.slice(inicio, fim);

    if (!append) noticiasContainer.innerHTML = "";

    paginaNoticias.forEach(noticia => {
      const card = document.createElement('div');
      card.classList.add('noticia-card');
      card.innerHTML = `
        
        <div class="noticia-content">
          <h3>${noticia.titulo}</h3>
          <p>${noticia.descricao}</p>
          <div class="noticia-meta">
            <span><i class="far fa-calendar"></i> ${new Date(noticia.data).toLocaleDateString('pt-BR')}</span>
            <span><i class="far fa-user"></i> ${noticia.autor}</span>
          </div>
          <a href="${noticia.url}" target="_blank" style="color:#2a0474b3;">Leia mais →</a>
        </div>
      `;
      noticiasContainer.appendChild(card);
    });

   
  }

 
  carregarNoticias();

  // 🔍 Pesquisa (Enter)
  searchInput.addEventListener('keyup', e => {
    if (e.key === 'Enter') {
      termoAtual = searchInput.value.trim();
      carregarNoticias(termoAtual);
    }
  });

  // Botão "Carregar mais"
  
});
