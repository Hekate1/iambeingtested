var title = "Pizza Leads to Cancer"
var author = "Conner Kennedy"
var development = "discoveries"
var topic = "national ebola pandemic"
var statistic = "5% increase in pizza related deaths"
var reaction = "a national pizza ban is in order"


var result = ("The article, '" + title + " by " + author + " discusses the recent " + development +
    " regarding the " + topic + ". " + author + " addresses the " + statistic +
     " as reason for concern. He states that " + reaction)

// Result Using Watson Variables
var emotion = "sad";
var taxonomy = "Law";
var concepts = ["science", "magic"];
var emotionConf = 0.64;
var degree = "some";
if (emotionConf > 0.66)
{
    degree = "much";
}
else if (emotion conf < 0.33) {
    degree = "little";
}
else {
    degree = "some";
}
var result2 = "This article, " + title + ", by " + author + " expresses " + degree + " " + emotion + ". It is a " + taxonomy + " article that discusses " + concepts + ".";