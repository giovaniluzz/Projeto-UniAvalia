const nome = localStorage.getItem("nomeUsuario");

    if (nome) {

      document
        .getElementById("nomeUsuario")
        .textContent = nome;

    } else {

      document
        .getElementById("nomeUsuario")
        .textContent = "Usuário";

    }

    function logout() {

      localStorage.removeItem("nomeUsuario");

      window.location.href = "home.html";

    }

    function irParaVotacao() {

      document
        .getElementById("modalVotacao")
        .style.display = "flex";

    }
