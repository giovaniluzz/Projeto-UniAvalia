// ═══════════════════════════════════════════════════════════════════
// BANCO DE DADOS LOCAL
//
// Estrutura:
//   dados[semestre] → array de salas
//   cada sala       → { nome, cor, projetos[] }
//   cada projeto    → { posicao, nome, curso, pontos, media, votos }
//
// Para integrar com API: substitua este objeto por uma chamada
// fetch() ao seu backend e popule a variável `dados` com o retorno.
// ═══════════════════════════════════════════════════════════════════
const dados = {
  1: [
    {
      nome: "Sala A",
      cor: "cor-ouro",               // cor-ouro | cor-azul | cor-cinza
      projetos: [
        { posicao: 1, nome: "Mesa 01 - Grupo A", curso: "Pedagogia",     pontos: 0.0, media: 0.0, votos: 0 },
        { posicao: 2, nome: "Mesa 02 - Grupo B", curso: "Administração", pontos: 0.0, media: 0.0, votos: 0 },
        { posicao: 3, nome: "Mesa 03 - Grupo C", curso: "Psicologia",    pontos: 0.0, media: 0.0, votos: 0 },
      ],
    },
    {
      nome: "Sala B",
      cor: "cor-azul",
      projetos: [
        { posicao: 1, nome: "Mesa 01 - Grupo K", curso: "Educação Física", pontos: 0.0, media: 0.0, votos: 0 },
        { posicao: 2, nome: "Mesa 02 - Grupo L", curso: "Fisioterapia",    pontos: 0.0, media: 0.0, votos: 0 },
      ],
    },
  ],
  2: [
    {
      nome: "Sala A",
      cor: "cor-ouro",
      projetos: [
        { posicao: 1, nome: "Mesa 01 - Grupo D", curso: "Direito",    pontos: 0.0, media: 0.0, votos: 0 },
        { posicao: 2, nome: "Mesa 02 - Grupo E", curso: "Economia",   pontos: 0.0, media: 0.0, votos: 0 },
      ],
    },
  ],
  3: [
    {
      nome: "Sala A",
      cor: "cor-ouro",
      projetos: [
        { posicao: 1, nome: "Mesa 01 - Grupo F", curso: "Engenharia", pontos: 0.0, media: 0.0, votos: 0 },
      ],
    },
  ],
  4: [
    {
      nome: "Sala A",
      cor: "cor-ouro",
      projetos: [
        { posicao: 1, nome: "Mesa 01 - Grupo G", curso: "Medicina",   pontos: 0.0, media: 0.0, votos: 0 },
      ],
    },
  ],
};


// ═══════════════════════════════════════════════════════════════════
// iconesMedalha
//
// Objeto que mapeia posição → SVG inline da medalha.
// 1º lugar  → troféu dourado
// 2º lugar  → medalha prata
// 3º lugar+ → fita/ribbon laranja
// ═══════════════════════════════════════════════════════════════════
const iconesMedalha = {
  // Troféu dourado — 1º lugar
  1: `<svg class="icone-medalha" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24" fill="none" stroke="#e6a817"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M6 9H4a2 2 0 0 1-2-2V5h4"/>
        <path d="M18 9h2a2 2 0 0 0 2-2V5h-4"/>
        <path d="M6 5h12v6a6 6 0 0 1-12 0V5z"/>
        <path d="M12 17v4"/><path d="M8 21h8"/>
      </svg>`,

  // Medalha prata — 2º lugar
  2: `<svg class="icone-medalha" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24" fill="none" stroke="#8a96a3"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="14" r="6"/>
        <path d="M8.5 2.5 8 8h8l-.5-5.5z"/>
        <line x1="9" y1="8" x2="8" y2="2.5"/>
        <line x1="15" y1="8" x2="16" y2="2.5"/>
      </svg>`,

  // Fita/ribbon laranja — 3º lugar em diante
  3: `<svg class="icone-medalha" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24" fill="none" stroke="#e07b39"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="8" r="6"/>
        <path d="M8.5 14.5 7 22l5-3 5 3-1.5-7.5"/>
        <line x1="9" y1="8" x2="8" y2="2.5"/>
        <line x1="15" y1="8" x2="16" y2="2.5"/>
      </svg>`,
};


// ═══════════════════════════════════════════════════════════════════
// gerarCardProjeto(projeto)
//
// Recebe um objeto de projeto e retorna o HTML do card.
// ═══════════════════════════════════════════════════════════════════
function gerarCardProjeto(projeto) {
  // Escolhe o ícone pela posição; usa o padrão se não for 1 ou 2
  const icone = iconesMedalha[projeto.posicao];
  return `
    <div class="card-projeto">

      <!-- Topo: ícone + nome + curso -->
      <div class="projeto-topo">
        ${icone}
        <div>
          <div class="projeto-nome">${projeto.nome}</div>
          <div class="projeto-curso">${projeto.curso}</div>
        </div>
      </div>

      <!-- Rodapé: pontos totais (esq.) e média/votos (dir.) -->
      <div class="projeto-rodape">
        <div>
          <div class="pontos-valor">${projeto.pontos.toFixed(1)}</div>
          <div class="pontos-label">pontos totais</div>
        </div>
        <div class="projeto-stats">
          <div class="stats-media">Média: ${projeto.media.toFixed(1)}</div>
          <div class="stats-votos">${projeto.votos} votos</div>
        </div>
      </div>

    </div>`;
}


// ═══════════════════════════════════════════════════════════════════
// gerarBlocoSala(sala)
//
// Recebe um objeto de sala e retorna o HTML completo do bloco:
//   título da sala + card do pódio com todos os projetos dentro.
// ═══════════════════════════════════════════════════════════════════
function gerarBlocoSala(sala) {
  // Gera os cards de todos os projetos da sala
  const cardsHtml = sala.projetos.map(gerarCardProjeto).join("");

  return `
    <section>
      <!-- Título "Sala X" com borda lateral azul -->
      <h2 class="sala-titulo">${sala.nome}</h2>

      <!-- Card do pódio com fundo colorido -->
      <div class="card-podio ${sala.cor}">

        <!-- Cabeçalho do pódio -->
        <div class="podio-header">
          <svg class="icone-podio-header" xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 24 24" fill="none" stroke="currentColor"
               stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 9H4a2 2 0 0 1-2-2V5h4"/>
            <path d="M18 9h2a2 2 0 0 0 2-2V5h-4"/>
            <path d="M6 5h12v6a6 6 0 0 1-12 0V5z"/>
            <path d="M12 17v4"/><path d="M8 21h8"/>
          </svg>
          <span>Pódio - ${sala.nome}</span>
        </div>

        <!-- Cards dos projetos -->
        ${cardsHtml}

      </div>
    </section>`;
}


// ═══════════════════════════════════════════════════════════════════
// trocarSemestre(numero, elementoAba)
//
// Chamada pelo onclick de cada botão de semestre.
//   1. Remove a classe "ativa" de todas as abas
//   2. Aplica "ativa" na aba clicada
//   3. Renderiza os blocos do semestre escolhido
// ═══════════════════════════════════════════════════════════════════
function trocarSemestre(numero, elementoAba) {
  // Remove destaque de todas as abas
  document.querySelectorAll(".aba").forEach(function(btn) {
    btn.classList.remove("ativa");
  });

  // Destaca a aba clicada
  elementoAba.classList.add("ativa");

  // Renderiza o conteúdo do semestre
  renderizarSemestre(numero);
}


// ═══════════════════════════════════════════════════════════════════
// renderizarSemestre(numero)
//
// Busca as salas do semestre em `dados` e injeta os blocos no <main>.
// Se não houver dados, exibe uma mensagem de aviso.
// ═══════════════════════════════════════════════════════════════════
function renderizarSemestre(numero) {
  const container = document.getElementById("conteudo");
  const salas = dados[numero];

  // Semestre sem dados cadastrados
  if (!salas || salas.length === 0) {
    container.innerHTML = `<p style="color:#6b7a8d; padding:16px;">
      Nenhum projeto cadastrado para este semestre.
    </p>`;
    return;
  }

  // Gera e injeta os blocos de todas as salas
  container.innerHTML = salas.map(gerarBlocoSala).join("");
}


// ═══════════════════════════════════════════════════════════════════
// INICIALIZAÇÃO
// Exibe o 1º semestre assim que a página carrega.
// ═══════════════════════════════════════════════════════════════════
renderizarSemestre(1);
