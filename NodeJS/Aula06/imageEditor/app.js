const sharp = require('sharp');
const compressImage = require('compress-images');
const fs = require('fs');

[pasteNode, pastePath, ...rest] = process.argv;

let path = rest[0];
let width = Number(rest[1]);
let height = Number(rest[2]);

const resize = (inputPath, outputPath, width, height) => {


    console.log(`caminho da imagem a ser redimensionada ${inputPath}`);
    console.log(`Caminho onde a imagem será salva e seu nome ${outputPath}`);

    sharp(inputPath).resize({ width: width, height: height })
        .toFile(
            outputPath, (error) => {
                if (error) return console.error('Caminho Inválido');
                console.log("Imagem redimensionada com sucesso");
                compress(outputPath, './compressed/')
            }
        )
}

const compress = (pathInput, outputPath) => {

    compressImage(pathInput, outputPath, { compress_force: false, statistic: true, autoupdate: true }, false,
        { jpg: { engine: "mozjpeg", command: ["-quality", "60"] } },
        { png: { engine: "pngquant", command: ["--quality=20-50", "-o"] } },
        { svg: { engine: "svgo", command: "--multipass" } },
        { gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } },
        function (error, completed, statistic) {
            console.log("-------------");
            console.log(error);
            console.log(completed);
            console.log(statistic);
            console.log("-------------");

            fs.unlink(pathInput, (err) => {
                if (err) return console.log(err);
                console.log(`${pathInput} apagado`);
            })

        }
    );

}

resize(path, './temp/nomeDoArquivoCriado.jpg', width, height)