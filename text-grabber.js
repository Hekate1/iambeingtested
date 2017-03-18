var express = require('express');
var cheerio = require('cheerio');
var app = express();
var ch = cheerio.load('<textarea name="textBox" </textarea>');

var server = app.listen(process.env.PORT || 1800, function () {
   var host = server.address().address
   var port = server.address().port
})

app.use(express.static(__dirname));

app.post('/sent-text', function (req, res) {
    
    var textInBox = ch(textBox).text();
    console.log(textInBox);
    
    var AlchemyLanguageV1 = require('watson-developer-cloud/alchemy-language/v1');

    var alchemy_language = new AlchemyLanguageV1({
      api_key: '3c1d6ef90c66d257d834d3766cf0cd6d49ccdfa6'
    });

    var parameters = {
      extract: 'taxonomy, title, concepts, authors, doc-emotion, entities, keywords, doc-sentiment',
      url: textInBox
    };

    alchemy_language.combined(parameters, function (err, response) {
      if (err)
      { 
          res.status(500).send(err);
      }

      else
      {
        //Taxonomy
        var score = 1;
        var i = 0;
        var taxonomy = "";
        while(score > .5)
        {
            score = response.taxonomy[i].score;
            
            if(i >= response.entities.length)
                score = 0
            
            if(i != 0)
                taxonomy += "\n"

            if(i == 0 || score > .5)
            {
                taxonomy += response.taxonomy[i].label;
            }
            i++;
        }
        taxonomy = taxonomy.substring(1);
        //*Taxonomy*

        //Title
        score = 1;
        i = 0;
        var title = response.title;
        title = title.italics();
        //*Title*

        //Concepts
        score = 1;
        i = 0;
        var concepts = "";
        while(score > .5)
        {
            score = response.concepts[i].relevance;

            if(i >= response.entities.length)
                score = 0
            
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
                authors += ", ";

            authors += response.authors.names[j];
        }
        //*Authors* 
          
        //Doc-emotion
        var emotion = "\n";
        var before = 0;
        if(response.docEmotions.anger > .5)
        {
            emotion += "anger"
            var before = 1;
        }
        if(response.docEmotions.disgust > .5)
        {
            if(before == 1)
                emotion += " and disgust"
            else
                emotion += "disgust"
            var before = 1;
        }
        if(response.docEmotions.fear > .5)
        {
            if(before == 1)
                emotion += " and fear"
            else
                emotion += "fear"
            var before = 1;
        }
        if(response.docEmotions.joy > .5)
        {
            if(before == 1)
                emotion += " and joy"
            else
                emotion += "joy"
            var before = 1;
        }
        if(response.docEmotions.sadness > .5)
        {
            if(before == 1)
                emotion += " and sadness"
            else
                emotion += "sadness"
            var before = 1;
        }
        //*Doc-emotion*   
          
        //Entities
        score = 1;
        i = 0;
        var entities = "";
        while(score > .5)
        {
            score = response.entities[i].score;
            
            if(i >= response.entities.length)
                score = 0
            
            if(i != 0)
                entities += "\n"

            
            if(i == 0 || score > .5)
            {
                entities += response.entities[i].type + " : " + response.entities[i].text;
            }
            i++;
        }
        //*Entities* 

        //Keywords
        score = 1;
        i = 0;
        var keywords = "";
        while(score > .5)
        {
            score = response.keywords[i].score;
            
            if(i >= response.keywords.length)
                score = 0;
            
            if(i != 0)
                keywords += "\n";

            
            if(i == 0 || score > .5)
            {
                keywords += response.keywords[i].text;
            }
            i++;
        }
        //*Key words* 
        
        //doc-sentiment
        var score = response.docSentiment.score;
        if(score < 0)
            score *= -1;
        var sentiment = (score*100) + "% " + response.docSentiment.type;
        
        //*doc-sentiment*
          
        //REPLY HERE
        var reply = "This article, " + title + " by " + author + ", expresses " + degree + " " + emotion + ". It is a " + taxonomy + " article that discusses " + concepts + ".";
        res.status(200).send("\n" + title + " \n" + authors + " \n" + taxonomy + " \n" + concepts + " \n" + entities + " \n" + keywords + " \n" + emotion + " \n" + sentiment);
      }
        
    });
})