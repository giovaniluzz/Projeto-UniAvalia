// ================================================
// REFERÊNCIA AO MODAL
// Pega o elemento pelo id="modal" definido no HTML.
// Guardamos em uma variável para usar nas funções.
// ================================================
const modal = document.getElementById('modal');


// ================================================
// ABRIR MODAL
// Chamada pelo botão "Acessar Painel".
// Adiciona a classe "ativo" ao modal,
// que no CSS muda display de none para flex.
// ================================================
function abrirPainel() {
  modal.classList.add('ativo');
}


// ================================================
// FECHAR MODAL
// Chamada pelo botão "Fechar" dentro do modal.
// Remove a classe "ativo", escondendo o modal.
// ================================================
function fecharModal() {
  modal.classList.remove('ativo');
}


// ================================================
// FECHAR AO CLICAR FORA DO MODAL
// Se o usuário clicar no fundo escuro (overlay),
// o modal também fecha.
// e.target é o elemento clicado.
// Se ele for o próprio overlay (e não a caixa),
// fechamos o modal.
// ================================================
modal.addEventListener('click', function(e) {
  if (e.target === modal) {
    fecharModal();
  }
});


// ================================================
// VOLTAR PARA A PÁGINA INICIAL
// Redireciona para o index.html.
// ================================================
function voltarInicio() {
  window.location.href = 'index.html';
}


// ================================================
// FECHAR A ABA
// Tenta fechar a aba atual do navegador.
// Só funciona se a aba foi aberta via script.
// ================================================
function fecharPainel() {
  if (confirm('Deseja sair?')) {
    window.close();
  }
}
