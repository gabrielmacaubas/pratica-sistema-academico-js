class DisciplinaRepositorio {
    constructor() {
        this._disciplinas = [];
    }

    // insere disciplina na lista de disciplinas
    inserir(disciplina) {
        this._disciplinas.push(disciplina);
    }

    // insere aluno na disciplina
    inserirAluno(index, aluno) {
        this._disciplinas[index].adicionarAluno(aluno);
    }

    // remove disciplina
    remover(codigo) {
        this._disciplinas.splice(this.buscarIndex(codigo), 1);
    }

    // lista disciplinas
    listar() {
        return this._disciplinas;
    }

    // retorna objeto da disciplina
    buscarPorCodigo(codigo) {
        return this._disciplinas.filter(
            disciplina => disciplina.codigo === codigo
        );
    }

    // retorna index da disciplina
    buscarIndex(codigo) {
        return this._disciplinas.findIndex(
            disciplina => disciplina.codigo === codigo
        );
    }
}
