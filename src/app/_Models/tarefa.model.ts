export class Tarefa {
    constructor(id: string, titulo: string, descricao: string, isComplet: boolean) {
        this.Id = id;
        this.Titulo = titulo;
        this.Descricao = descricao;
        this.isComplet = isComplet;
    }
    Id: string;
    Titulo: string;
    Descricao: string;
    isComplet: boolean;
}
