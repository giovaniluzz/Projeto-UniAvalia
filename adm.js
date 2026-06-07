function mostrarAba(aba) {

    const emails = document.getElementById("emails");
    const semestres = document.getElementById("semestres");
    const projetos = document.getElementById("projetos");

    const btnEmails = document.getElementById("btnEmails");
    const btnSemestres = document.getElementById("btnSemestres");
    const btnProjetos = document.getElementById("btnProjetos");

    emails.style.display = "none";
    semestres.style.display = "none";
    projetos.style.display = "none";

    btnEmails.classList.remove("active");
    btnSemestres.classList.remove("active");
    btnProjetos.classList.remove("active");

    if (aba === "emails") {
        emails.style.display = "block";
        btnEmails.classList.add("active");
    }

    if (aba === "semestres") {
        semestres.style.display = "block";
        btnSemestres.classList.add("active");
    }

    if (aba === "projetos") {
        projetos.style.display = "block";
        btnProjetos.classList.add("active");
    }
}

function logout() {

    localStorage.removeItem("nomeUsuario");

    window.location.href="  PainelAdmin.html"

}

function adicionarProjeto() {

    const nome = document.getElementById("nomeProjeto").value;
    const curso = document.getElementById("cursoProjeto").value;
    const semestre = document.getElementById("semestreProjeto").value;
    const mesa = document.getElementById("mesaProjeto").value;
    const turma = document.getElementById("turmaProjeto").value;

    document.getElementById("listaProjetos").innerHTML += `
        <div class="usuario">

            <div class="dados">
                <div>
                    <strong>${nome}</strong>
                    <p>Curso: ${curso}</p>
                    <p>Semestre: ${semestre}</p>
                    <p>Mesa: ${mesa}</p>
                    <p>Turma: ${turma}</p>
                </div>
            </div>

            <i class="fas fa-trash"
               onclick="this.parentElement.remove()"></i>

        </div>
    `;
}

function adicionarEmail() {
    const nome = document.getElementById("nomeEmail").value;
    const email = document.getElementById("emailEmail").value;

    if (!nome || !email) {
        alert("Preencha todos os campos");
        return;
    }

    const lista = document.getElementById("listaEmails");

    lista.innerHTML += `
        <div class="usuario">
            <div class="dados">
                <div>
                    <strong>${nome}</strong>
                    <p>${email}</p>
                </div>
            </div>

            <i class="fas fa-trash" onclick="this.parentElement.remove()"></i>
        </div>
    `;
}

function adicionarSemestre() {

    const nome = document.getElementById("nomeSemestre").value;

    if (!nome) {
        alert("Digite o nome do semestre");
        return;
    }

    document.getElementById("listaSemestres").innerHTML += `
        <div class="semestre-card">
            <div>
                <strong>${nome}</strong>
                <span class="tag">Ativo</span>
                <i class="fas fa-trash"
               onclick="this.parentElement.remove()"></i>
            </div>

        </div>
    `;

    document.getElementById("nomeSemestre").value = "";
}