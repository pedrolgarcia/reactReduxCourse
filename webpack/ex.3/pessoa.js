export default class Pessoa { // sistema de módulos ecma script 2015
    constructor(nome) {
        this.nome = nome;
    }

    toString() {
        return `Pessoa: ${this.nome}`;
    }
}