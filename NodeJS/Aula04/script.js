// FIXME: Trabalhando com arquivos no NODE JS
// FIXME: O fs.appendFile() método anexa conteúdo especificado a um arquivo. Se o o arquivo não existe, o arquivo será criado:
// FIXME: O fs.writeFile() método substitui o arquivo e o conteúdo especificados, se existir. Se o arquivo não existir, um novo arquivo, contendo o conteúdo especificado, será ser criado
// FIXME: O fs.unlink apaga o arquivo
// FIXME: O fs.rename renomeia o arquivo
// FIXME: O fs.readFile ler o arquivo
// Pesquisar na documentação para saber todos os parâmetros necessários para cada método acima

[argOne, argTwo, ...rest] = process.argv;
let fs = require('fs');

let fileName = rest[0];
fs.readFile(fileName, "UTF8", (err, data) => {
    if (err) {throw 'Arquivo não encontrado'};

    fs.writeFile(fileName + '-Upercase', data.toUpperCase(), (err) => {
        if (err) {throw err};

        console.log('Arquivo gerado com sucesso')
        console.log(data)
    })

})


