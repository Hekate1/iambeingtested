//var textInBox = document.getElementById('textBox').value;
//console.log(textInBox);

var AlchemyLanguageV1 = require('watson-developer-cloud/alchemy-language/v1');

var alchemy_language = new AlchemyLanguageV1({
  api_key: '3c1d6ef90c66d257d834d3766cf0cd6d49ccdfa6'
});

var params = {
  text: 'IBM Watson won the Jeopardy television show hosted by Alex Trebek'
};

var parameters = {
  extract: 'taxonomy, title',
  url: 'https://www.nytimes.com/2017/03/17/world/europe/trump-britain-obama-wiretap-gchq.html?_r=0'
};

alchemy_language.combined(parameters, function (err, response) {
  if (err)
    console.log('error:', err);
  else
    var score = 1;
    var i = 0;
    while(score > .5){
        score = response.taxonomy[i].score;
        if(i == 0 || score > .5)
        {
            console.log(response.taxonomy[i].label);
        }
            
        i++;
    }
})