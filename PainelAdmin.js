function irParaVotacao() {
  // Navegue para a tela de votação
  alert('Ir para Votação');
}

function verRankings() {
  // Navegue para a tela de rankings
  alert('Ver Rankings');
}

function acessarPainel() {
  // Navegue para o painel administrativo
  alert('Acessar Painel Admin');
}

const nome = localStorage.getItem("nomeUsuario");

    if (nome) {
      document.getElementById("nomeUsuarioTitulo").textContent = nome;
    }

    function logout() {

      localStorage.removeItem("nomeUsuario");
      localStorage.removeItem("emailUsuario");

      window.location.href = "home.html";

    }