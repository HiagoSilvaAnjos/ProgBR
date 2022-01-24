// Ver data atual

let dias = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
];

let meses = [
    "janeiro",
    "fervereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
];



function verHora() {

    let data = new Date();

    if (data.getHours() >= 6 && data.getHours() <= 12) {
        console.log(
            "Olá, são exatamente " +
            data.getHours() +
            ":" +
            data.getMinutes() +
            " da manhã" +
            "do dia " +
            data.getUTCDate() +
            " do mês de " +
            meses[data.getMonth()] +
            " de " +
            data.getFullYear() +
            " e hoje é " +
            dias[data.getDay()]
        );
    } else if (data.getHours() > 12 && data.getHours() < 18) {
        console.log(
            "Olá, são exatamente " +
            data.getHours() +
            ":" +
            data.getMinutes() +
            " da tarde," +
            " do dia " +
            data.getUTCDate() +
            " do mês de " +
            meses[data.getMonth()] +
            " de " +
            data.getFullYear() +
            ", e hoje é " +
            dias[data.getDay()]
        );
    } else if (data.getHours() >= 18 && data.getHours() <= 23) {
        console.log(
            "Olá, são exatamente " +
            data.getHours() +
            ":" +
            data.getMinutes() +
            " da noite" +
            "do dia " +
            data.getUTCDate() +
            " do mês de " +
            meses[data.getMonth()] +
            " de " +
            data.getFullYear() +
            " e hoje é " +
            dias[data.getDay()]
        );
    } else {
        console.log(
            "Olá, são exatamente " +
            data.getHours() +
            ":" +
            data.getMinutes() +
            " da madrugada" +
            " do dia " +
            data.getUTCDate() +
            " do mês de " +
            meses[data.getMonth()] +
            " de " +
            data.getFullYear() +
            " e hoje é " +
            dias[data.getDay()]
        );
    }
    return verHora
}

verHora();


console.log("");
console.log("");
console.log("");


// Para criar uma data específica

// var teste = new Date(year, month, day, hour, minute, second, millisecond);

// var teste = new Date(ano, mes, dia, hora, minuto, segundo, milisegundo);

console.log("Exemplo1 de como criar datas");
var teste1 = new Date(2022, 06, 14, 16, 30, 45, 999);
console.log(teste1);

/* Se você apenas passa um número entre parênteses o javascript conta como milisegundos new Date(2000), aqui seria dois mil milisigundos ou 2 segundos
 */

// Aqui seria 1 dia depois de uma data, 1000 milisegundos * 60 seconds * 60 minutos * 24 que seria um dia

console.log("Exemplo2 de como criar datas");
var teste2 = new Date(1000 * 60 * 60 * 24);

console.log(teste2);

// Outra maneira de criar data

console.log("Exemplo3 de como criar datas");
var teste3 = new Date("jan 18 2022 17:30");
console.log(teste3)
