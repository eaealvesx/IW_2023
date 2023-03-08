//rotas
const express = require('express')
const app = express()

app.get("/",function(req,res){
    res.send("minha pagina no noteJS")
})
app.get("/blog",function(req,res){
    res.send("minha pagina blog")
})
app.get("/sobre",function(req,res){
    res.send("minha pagina sobre")
})

app.listen(8081, function(){
    console.log("servidor funcionando")
})