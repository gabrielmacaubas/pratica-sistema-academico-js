class Disciplina {
    constructor(codigo, nome) {
        this._codigo = codigo;
        this._nome = nome;
        this._alunos = [];
    }

    // gets e sets
    get codigo() {
        return this._codigo;
    }

    get nome() {
        return this._nome;
    }

    get alunos() {
        return this._alunos;
    }

    set codigo(codigoNovo) {
        this._codigo = codigoNovo;
    }

    set nome(nomeNovo) {
        this._nome = nomeNovo;
    }

    // adiciona um aluno na disciplina
    adicionarAluno(aluno) {
        this._alunos.push(aluno);
    }
}
