"use strict";
const NaturalLanguageClassifierV1 = require("watson-developer-cloud/natural-language-classivier/v1");
const fs = require("fs");
                   
const natural_language_classifier = new NaturalLanguageClassifierV1({
    username: "57dd3451-7653-4947-adbc-399d58a8a723",
    password: "2iggNeyLubbm",
    version: "v1"
});

// Creating a classifier
const params = {
    language: "en",
    name: "emotion",
    training_data: fs.createReadStream("./emotion.csv")
};

natural_language_classifier.create(params, function(err, response) {
    if (err) {
        console.log(err);
    } else {
        console.log(JSON.stringify(response, null, 2));
    }
})