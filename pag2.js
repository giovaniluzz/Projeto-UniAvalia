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

    function verRankings() {

      document
        .getElementById("modalRankings")
        .style.display = "flex";

    }

    function fecharModal(id) {

      document
        .getElementById(id)
        .style.display = "none";

    }

    function confirmarVoto() {

      const semestre =
        document.getElementById("semestre").value;

      const sala =
        document.getElementById("sala").value;

      const projeto =
        document.getElementById("projeto").value;

      const nota =
        document.getElementById("notaValor").textContent;

      alert(
        `Voto registrado! 🎉
        
        Projeto: ${projeto}
        Nota: ${nota}
        Sala: ${sala}
        Semestre: ${semestre}`
      );

      fecharModal("modalVotacao");

    }