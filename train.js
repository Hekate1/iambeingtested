"use strict";
const NaturalLanguageClassifierV1 = require("watson-developer-cloud/natural-language-classifier/v1");
const fs = require("fs");
                   
const natural_language_classifier = new NaturalLanguageClassifierV1({
    username: "92cac92c-59b7-49c0-ad20-df0f66c06ada",
    password: "MrIOePbsNZWx",
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