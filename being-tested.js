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
    array[1][0] *= m1
    array[2][0] *= m1
    array[3][0] *= m1
    array[4][0] *= m1
    
    var m2 = 5/((array[0][1] + array[1][1] + array[2][1] + array[3][1] + array[4][1])/5)
    array[0][1] *= m2
    array[1][1] *= m2
    array[2][1] *= m2
    array[3][1] *= m2
    array[4][1] *= m2
    
    var m3 = 5/((array[0][2] + array[1][2] + array[2][2] + array[3][2] + array[4][2])/5)
    array[0][2] *= m3
    array[1][2] *= m3
    array[2][2] *= m3
    array[3][2] *= m3
    array[4][2] *= m3
    
    var m4 = 5/((array[0][3] + array[1][3] + array[2][3] + array[3][3] + array[4][3])/5)
    array[0][3] *= m4
    array[1][3] *= m4
    array[2][3] *= m4
    array[3][3] *= m4
    array[4][3] *= m4
    
    var m5 = 5/((array[0][4] + array[1][4] + array[2][4] + array[3][4] + array[4][4])/5)
    array[0][4] *= m5
    array[1][4] *= m5
    array[2][4] *= m5
    array[3][4] *= m5
    array[4][4] *= m5
    
    console.log(array)
    
    res.status(200).send()
})