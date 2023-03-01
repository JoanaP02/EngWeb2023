
var http = require('http')
var url = require('url')
var fs = require('fs')


http.createServer(function (req, res) {

    
    var pedido = url.parse(req.url, true).pathname
    
   
    fs.readFile('./html/' + pedido.substring(1) + '.html', function(err,data) {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        if(err){
            res.write("ERRO: na leitura do ficheiro :: " + err)
        }
        else {
            res.write(data)
        }
        res.end();
    })
   
}).listen(7779)

console.log("Servidor à escuta na porta 7779...")