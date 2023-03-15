class DisciplinaControlador {
    constructor() {
        this.disciplinaServico = new DisciplinaServico();
    }

    // captura os inputs e tenta inserir uma disciplina caso ela nao exista
    inserir() {
        const nomeDisciplina = document.querySelector("#nome").value;
        const codigoDisciplina = Number(document.querySelector("#codigo").value);
        const disciplina = this.disciplinaServico.inserir(codigoDisciplina, nomeDisciplina);

        if (disciplina) {
            this.mostrarDisciplinaNoHTML(nomeDisciplina, codigoDisciplina);
            alert('Disciplina inserida com sucesso!');
        } 
        else {
            alert('Código já existente não permitido!')
        }
    }

    // mostra a disciplina na tela com seu botao de exclusao
    mostrarDisciplinaNoHTML(nome, codigo) {
        const elementoP = document.createElement("p");
        elementoP.textContent = `${nome} - ${codigo}`;
        const elementoBotaoApagar = document.createElement("button");
        elementoBotaoApagar.textContent = "X";

        elementoBotaoApagar.addEventListener('click', (event) => {
                this.removerDisciplinaDaLista(codigo);
                event.target.parentElement.remove();
            }
        );

        elementoP.appendChild(elementoBotaoApagar);
        document.body.appendChild(elementoP);
    }

    // pede ao servico para remover uma disciplina
    removerDisciplinaDaLista(codigo) {
        this.disciplinaServico.remover(codigo);
    }

    // tenta inserir um aluno na disciplina e mostra na tela o sucesso ou fracasso
    inserirAlunoNaDisciplina(codigo, aluno) {
        const insercao = this.disciplinaServico.inserirAluno(codigo, aluno);
        if (insercao) {
            alert('Aluno inserido na disciplina com sucesso!');
        } else {
            alert('Disciplina inexistente!');
        }
        
        
    }
}