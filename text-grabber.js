var express = require('express');
var app = express();

var server = app.listen(process.env.PORT, function () {
    consol.log("server1")
   var host = server.address().address
   var port = server.address().port
   consol.log("server2")
})

app.get('/', function(req, res) {
    consol.log("get1")
    res.sendFile(path.join(__dirname + '/index.html'));
    consol.log("get2")
});

app.post('/sent-text', function (req, res) {
    
    console.log("post1")
    //var textInBox = document.getElementById('textBox').value;
    //console.log(textInBox);

    var AlchemyLanguageV1 = require('watson-developer-cloud/alchemy-language/v1');

    var alchemy_language = new AlchemyLanguageV1({
      api_key: '3c1d6ef90c66d257d834d3766cf0cd6d49ccdfa6'
    });

    var parameters = {
      extract: 'taxonomy, title, concepts, authors',
      url: 'https://www.nytimes.com/2017/03/17/world/europe/trump-britain-obama-wiretap-gchq.html?_r=0'
    };

    alchemy_language.combined(parameters, function (err, response) {
    console.log("HERE!") 
      if (err)
      { 
          console.log('error:', err);
      }

      else
      {
        //Taxonomy
        var score = 1;
        var i = 0;
        var taxonomy = "";
        while(score > .5)
        {
            if(i != 0)
                taxonomy += "\n"

            score = response.taxonomy[i].score;
            if(i == 0 || score > .5)
            {
                taxonomy += response.taxonomy[i].label;
            }
            i++;
        }
        //*Taxonomy*

        //Title
        score = 1;
        i = 0;
        var title = response.title;
        //*Title*

        //Concepts
        score = 1;
        i = 0;
        var concepts = "";
        while(score > .5)
        {
            score = response.concepts[i].relevance;

            if(i != 0 && score > .5)
                concepts += "\n"

            if(i == 0 || score > .5)
            {
                concepts += response.concepts[i].text;
            }
            i++;
        }
        //*Concepts* 

        //Authors
        var authors = "";
        for(var j = 0; j < response.authors.names.length; j++)
        {
            if(j != 0)
                authors += "\n";

            authors += response.authors.names[j];
        }
        //*Authors* 

        console.log("HERE1")  
        document.getElementById('authors').value = authors;

      }
        
    });
})