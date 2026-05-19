// ============================================================
// home.js — Lógica da tela principal (Home) do UniAvalia
// Integrado com o sistema de login (index.html / script.js)
// ============================================================


// ============================================================
// FUNÇÃO: LOGOUT
// Remove a sessão e redireciona para o login
// ============================================================
function logout() {
  const confirmar = confirm("Deseja realmente sair?");
  if (confirmar) {
    sessionStorage.removeItem("emailLogado");
    window.location.href = "index.html";
  }
}


// ============================================================
// FUNÇÃO: IR PARA VOTAÇÃO
// Abre o modal de votação
// ============================================================
function irParaVotacao() {
  abrirModal("modalVotacao");
}


// ============================================================
// FUNÇÃO: VER RANKINGS
// Abre o modal com o ranking de projetos
// ============================================================
function verRankings() {
  abrirModal("modalRankings");
}


// ============================================================
// FUNÇÃO: ABRIR MODAL
// Recebe o ID do modal e o exibe na tela
// ============================================================
function abrirModal(id) {
  document.getElementById(id).classList.add("active");
}


// ============================================================
// FUNÇÃO: FECHAR MODAL
// Recebe o ID do modal e o esconde
// ============================================================
function fecharModal(id) {
  document.getElementById(id).classList.remove("active");
}


// ============================================================
// FECHAR MODAL AO CLICAR FORA (no fundo escurecido)
// ============================================================
document.querySelectorAll(".modal-overlay").forEach(function (overlay) {
  overlay.addEventListener("click", function (e) {
    // Só fecha se clicou exatamente no fundo, não no conteúdo
    if (e.target === overlay) {
      overlay.classList.remove("active");
    }
  });
});


// ============================================================
// FUNÇÃO: CONFIRMAR VOTO
// Lê os valores selecionados e registra o voto
// ============================================================
function confirmarVoto() {
  const semestre = document.getElementById("semestre").value;
  const sala     = document.getElementById("sala").value;
  const projeto  = document.getElementById("projeto").value;
  const nota     = document.getElementById("notaValor").textContent;

  // Exibe confirmação com os dados escolhidos
  alert(
    "✅ Voto registrado com sucesso!\n\n" +
    "Semestre: " + semestre + "\n" +
    "Sala: " + sala + "\n" +
    "Projeto: " + projeto + "\n" +
    "Nota: " + nota
  );

  // Fecha o modal após confirmar
  fecharModal("modalVotacao");
}