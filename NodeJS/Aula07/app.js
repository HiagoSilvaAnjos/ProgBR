const http = require('http');
http.createServer((request, response) => {

    response.writeHead(200, {'content-Type': 'application/json'});
    response.end(saudação());

}).listen(3000, (err) => {
    if (err) return console.log(err)

    console.log("Sevirdor rodando na porta 3000");  
})  

function saudação () {
    return JSON.stringify({texto:"<h1>Hello!, world!</h1>"});
}