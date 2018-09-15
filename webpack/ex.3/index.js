import Pessoa from './pessoa'; // sistema de módulos ecma script 2015
                               // browser não reconhece esse recurso ainda, precisamos de um transpile (babel)
const pessoa = new Pessoa('Guilherme');
console.log(pessoa.toString());