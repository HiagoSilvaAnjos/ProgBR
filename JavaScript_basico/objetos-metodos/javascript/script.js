function calcMedia() {
    return (this.notas[0] + this.notas[1]) / 2;
};

function result() {
    if (this.media() >= 5) {
        return "Aprovado"
    }
    else {
        return "Reprovado"
    }
}

var aluno1 = {
    nome: "Hiago",
    notas: [6.0, 8.0],

    media: calcMedia,
    seuResultado: result
};


var aluno2 = {
    nome: "Igor",
    notas: [4.0, 5.0],

    media: calcMedia,
    seuResultado: result
};

// RESULTADO ALUNO1 (HIAGO)

console.log(aluno1.nome
            +
            ","
            +
            " suas notas foram "
            +
            aluno1.notas[0]
            +
            " e "
            +
            aluno1.notas[1]);

console.log("Sua média foi: "
             + 
             aluno1.media());


console.log("Você foi "
             +
             aluno1.seuResultado()
             +
             " com média "
             +
             aluno1.media());


console.log("");

// RESULTADO ALUNO2 (IGOR)

             console.log(aluno2.nome
                +
                ","
                +
                " suas notas foram "
                +
                aluno2.notas[0]
                +
                " e "
                +
                aluno2.notas[1]);
    
    console.log("Sua média foi: "
                 + 
                 aluno2.media());
    
    
    console.log("Você foi "
                 +
                 aluno2.seuResultado()
                 +
                 " com média "
                 +
                 aluno2.media());
    










// function calcMedia () {
//     return (this.notas[0] + this.notas[1]) / 2;
// };



// var aluno = {
//     nome: "Hiago",
//     notas: [10.0, 10.0],

//     media: calcMedia
// };


// var aluno1 = {
//     nome: "Igor",
//     notas: [6.0, 8.0],

//     media: calcMedia
// };


// console.log(aluno.nome);
// console.log(aluno.media());

// console.log(aluno1.nome);
// console.log(aluno1.media());