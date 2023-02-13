"use strict";

function createAluno (name, age) {
    return {
        name: name,
        age: age
    }
}

let listAlunos = [
    createAluno('Hiago', 18),
    createAluno('Maria', 17),
    createAluno('John', 20),
    createAluno('Igor', 16)
]

console.log(listAlunos)

function menosDeTrinta (aluno) {
    return `Olá ${aluno.name}, sua idade é ${aluno.age} anos`
}

const underAge = listAlunos.map(menosDeTrinta);
console.log(underAge)


for (let i of underAge) {
    console.log(i);
}

for (let i of listAlunos) {
    console.log(i.name, i.age);
}