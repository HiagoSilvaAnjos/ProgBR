var progBr = {
    nome: "Igor",
    sobrenome: "Oliveira"
};

var novaPropriedade = "MeusCursos";

progBr.idade = 30;

progBr[novaPropriedade] = [
    "HTML",
    "CSS",
    "Java Script",
    "Firebase",
    "Jquary",
    "Bootstrap",
    "Node js",
    "React js",
    "MongoDB",
    "Electron"];


console.log("Nome: " + progBr.nome
    +
    "\n"
    +
    "Sobrenome: " + progBr.sobrenome
    +
    "\n"
    +
    "Idade: " + progBr.idade + " anos... "
    +
    "(ou 50 não sei)");


for (var index of progBr[novaPropriedade]) {
    console.log("O "
        +
        progBr.nome
        +
        " Ensina "
        +
        index);
}

