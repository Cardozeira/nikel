const nome = "Ricardo Roedel";
let nome2 = ""

let pessoaDefault = {
    nome: "Ricardo Roedel",
    idade: "46",
    trabalho: "Programador",
    
}

let nomes = ["Ricardo Roedel", "Monica Macedo", "Roberto Roedel"];

let pessoas = [
    {
        nome: "Ricardo Roedel",
        idade: "46",
        trabalho: "Programador",
    },
    {
        nome: "Monica Macedo",
        idade: "44",
        trabalho: "Pet-sitter",
    }
]


function alterarNome () {
    nome2 = "Roberto Roedel";
    console.log ("Valor alterado:");
    console.log (nome2);
}

function recebeEalteraNome (novoNome) {
    nome2 = novoNome;
    console.log ("Valor alterado recebendo um nome:");
    console.log (nome2);
}

function imprimirPessoa(pessoa) {
console.log("Nome:");
console.log(pessoa.nome);

console.log("Idade:");
console.log(pessoa.idade);

console.log("Trabalho:");
console.log(pessoa.trabalho);
}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa);
}

adicionarPessoa({
    nome: "Roberto Roedel",
    idade: "34",
    trabalho:"Diretor"
});

console.log(pessoas);

//imprimirPessoa(pessoaDefault);

//imprimirPessoa ({
    //nome: "Jardel Barbosa",
    //idade: "35",
    //trabalho: "Designer",
//})







""
//recebeEalteraNome ("José Vigário da Silva");
//recebeEalteraNome ("Maria Silva");

//alterarNome();





















""