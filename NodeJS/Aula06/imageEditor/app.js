const sharp = require('sharp');

[pasteNode, pastePath, ...rest] = process.argv;

let path = rest[0];
let width = Number(rest[1]);
let height = Number(rest[2]);

const resize = (path, width, height) => {

    sharp(path).resize({width: width, height: height})
    .toFile('./temp/output.jpg', (error) => {
        if (error) return console.error('Caminho Inválido');
        console.log("Imagem redimensionada com sucesso");
    })

}

console.log(path);
resize(path, width, height)