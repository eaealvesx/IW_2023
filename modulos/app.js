const http = require('http')

http.createServer(function(req,res){
    res.end('meu primeiro servidor NodeJS')
}).listen(8081)

console.log('servidor node funcionario!')