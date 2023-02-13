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
    return aluno.age < 18
}

const underAge = listAlunos.filter(menosDeTrinta);

for (let i of underAge) {
    console.log(`São menor de idade o aluno ${i.name}`);
}
