class DisciplinaServico {
    constructor() {
        this.repositorio = new DisciplinaRepositorio();
    }

    // verifica e insere disciplina no repositorio
    inserir(codigo, nome) {
        if (this.buscarPorCodigo(codigo).length == 0) {
            const disciplina = new Disciplina(codigo, nome);
            return this.repositorio.inserir(disciplina);
        }

        // já existe uma disciplina com esse código
        return undefined;
    }   
    
    // verifica se disciplina existe para inserir aluno no repositorio
    inserirAluno(codigo, aluno) {
        if (this.buscarPorCodigo(codigo).length == 1) {
            const index = this.repositorio.buscarIndex(codigo);
            return this.repositorio.inserirAluno(index, aluno);
        }
        
        return undefined;
    }

    // remove disciplina do repositorio com o codigo
    remover(codigo) {
        this.repositorio.remover(codigo);
    }

    // lista disciplinas do repositorio
    listar() {
        return this.repositorio.listar();
    }

    // retorna objeto da disciplina do repositorio
    buscarPorCodigo(codigo) {
        return this.repositorio.buscarPorCodigo(codigo);
    }
}