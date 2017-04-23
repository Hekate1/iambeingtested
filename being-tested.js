var express = require('express');
var fs = require("fs");
var app = express();

var server = app.listen(process.env.PORT || 1800, function () {
   var host = server.address().address
   var port = server.address().port
})

app.use(express.static(__dirname));

app.get('/sent-text', function (data, res) {
    
    var parameters = {
      extract: 'taxonomy, title, concepts, authors, doc-emotion, entities, keywords, doc-sentiment',
      url: data._parsedUrl.query
    };

   
    });
})