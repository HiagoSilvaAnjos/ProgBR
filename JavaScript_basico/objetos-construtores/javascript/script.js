function aluno(nome, n1, n2) {
    this.nome = nome;
    this.nota1 = n1;
    this.nota2 = n2;

    this.media = function () {
        return (this.nota1 + this.nota2) / 2;
    }

    this.seuConceito = function () {
        if (this.media() >= 9 && this.media() <= 10) {
            var conceito = "Parabens " + this.nome + " você foi Excelente"
        }
        else if (this.media() >= 7 && this.media() < 9) {
            conceito = "Boa " + this.nome + " você foi Ótimo"
        }
        else if (this.media() >= 5 && this.media() < 7) {
            conceito = this.nome + " você foi bem mais poderia ter sido melhor"
        }
        else {
            conceito = this.nome + " Você foi ruim deveria ter estudado mais!"
        }
        return conceito
    }

    console.log(this.nome +
        ":\n"
        +
        this.seuConceito()
        +
        "\n"
        +
        "Suas notas foram "
        +
        this.nota1
        +
        " e "
        +
        this.nota2
        +
        "\n"
        +
        "Sua média foi "
        +
        this.media());

    return aluno;
}


let alunos = [
    new aluno("Hiago", 10, 10),
    new aluno("Igor", 8, 9),
    new aluno("Maria", 6, 7),
    new aluno("João", 5, 4)
]


// Fim

console.log("");
console.log("Mesma funcionalidade porem com códigos diferentes:");
console.log("");


// Mesma funcionalidade porem com códigos diferentes:
function criarAluno(nome, nota1, nota2) {
    let aluno = {
        seuNome: nome,
        primeiraNota: nota1,
        segundaNota: nota2,
        media: function () {
            return (this.primeiraNota + this.segundaNota) / 2;
        }
    };

    function seuConceito() {
        if (aluno.media() >= 9 && aluno.media() <= 10) {
            var conceito = "Parabens " + aluno.seuNome + " você foi Excelente"
        }
        else if (aluno.media() >= 7 && aluno.media() < 9) {
            conceito = "Boa " + aluno.seuNome + " você foi Ótimo"
        }
        else if (aluno.media() >= 5 && aluno.media() < 7) {
            conceito = aluno.seuNome + " você foi bem mais poderia ter sido melhor"
        }
        else {
            conceito = aluno.seuNome + " Você foi ruim deveria ter estudado mais!"
        }
        return conceito
    }


    console.log(aluno.seuNome +
        ":\n"
        +
        seuConceito()
        +
        "\n"
        +
        "Suas notas foram "
        +
        aluno.primeiraNota
        +
        " | "
        +
        aluno.segundaNota
        +
        "\n"
        +
        "Sua média foi "
        +
        aluno.media());

    return aluno;

};


let turma = [
    criarAluno("Hiago", 10, 10),
    criarAluno("Igor", 8, 9),
    criarAluno("João", 6, 7),
    criarAluno("Maria", 4, 5)
];
