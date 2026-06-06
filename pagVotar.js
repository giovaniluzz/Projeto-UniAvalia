document.addEventListener("DOMContentLoaded", () => {

    const projetos = {
        A: [
            "Mesa 01 - Grupo A - Pedagogia",
            "Mesa 02 - Grupo B - Administração"
        ],

        B: [
            "Mesa 03 - Grupo C - Psicologia",
            "Mesa 04 - Grupo D - Direito"
        ]
    };

    const sala = document.getElementById("sala");
    const projeto = document.getElementById("projeto");
    const semestre = document.getElementById("semestre");
    const nota = document.getElementById("nota");
    const btnVotar = document.getElementById("btnVotar");

    const votosRealizados = [];

    sala.addEventListener("change", () => {

        projeto.innerHTML = "";
        projeto.disabled = false;

        const opcaoPadrao = document.createElement("option");
        opcaoPadrao.textContent = "Escolha o projeto";
        opcaoPadrao.disabled = true;
        opcaoPadrao.selected = true;
        projeto.appendChild(opcaoPadrao);

        if (!projetos[sala.value]) {
            projeto.disabled = true;
            return;
        }

        projetos[sala.value].forEach(nomeProjeto => {
            const option = document.createElement("option");
            option.value = nomeProjeto;
            option.textContent = nomeProjeto;
            projeto.appendChild(option);
        });
    });

    btnVotar.addEventListener("click", () => {

        if (!semestre.value) {
            alert("Selecione um semestre.");
            return;
        }

        if (!sala.value) {
            alert("Selecione uma turma.");
            return;
        }

        if (!projeto.value) {
            alert("Selecione um projeto.");
            return;
        }

        if (nota.value === "") {
            alert("Digite uma nota.");
            return;
        }

        const valorNota = parseFloat(nota.value);

        if (valorNota < 0 || valorNota > 10) {
            alert("A nota deve estar entre 0 e 10.");
            return;
        }

        if (votosRealizados.includes(projeto.value)) {
            alert("Você já votou neste projeto.");
            return;
        }

        votosRealizados.push(projeto.value);

        const cardProjeto = document.querySelector(
            `[data-projeto="${projeto.value}"]`
        );

        if (cardProjeto) {

            const status = cardProjeto.querySelector(".status");
            const votos = cardProjeto.querySelector("small");

            status.textContent = "✓ Votado";
            status.classList.remove("pendente");
            status.classList.add("votado");

            votos.textContent = "1 voto";

            const notaExistente =
                cardProjeto.querySelector(".nota");

            if (!notaExistente) {

                const notaElemento =
                    document.createElement("p");

                notaElemento.classList.add("nota");
                notaElemento.textContent =
                    `Sua nota: ${valorNota}`;

                cardProjeto
                    .querySelector("div")
                    .appendChild(notaElemento);
            }
        }

        alert("Voto registrado com sucesso!");

        projeto.selectedIndex = 0;
        nota.value = "";
    });

});

function logout() {

      localStorage.removeItem("nomeUsuario");

      window.location.href="pag2.html"

}