var express = require('express')
var fs = require("fs")
var app = express()
var globalArray = []

var server = app.listen(process.env.PORT || 1800, function () {
   var host = server.address().address
   var port = server.address().port
})

app.use(express.static(__dirname));

app.post('/array', function (data, res) {
    console.log(data.headers.myarray)
    var array = JSON.parse(data.headers.myarray)
    console.log(array[0][0])
    
    res.status(200).send()
})