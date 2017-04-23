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
    var array = JSON.parse(data.headers.myarray)
    var m1 = 5/((array[0][0] + array[1][0] + array[2][0] + array[3][0] + array[4][0])/5)
    array[0][0] *= m1
    console.log(array[0][0])
    res.status(200).send()
})