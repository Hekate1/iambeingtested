"use strict";
const NaturalLanguageClassifierV1 = require("watson-developer-cloud/natural-language-classifier/v1");
const fs = require("fs");

const natural_language_classifier = new NaturalLanguageClassifierV1({
    username: "<USERNAME>",
    password: "<PASSWORD>",
    version: "v1"
});

natural_language_classifier.classify(
    {
        text: "Is it sunny?",
        classifier_id: "<CLASSIFIER ID>"
    },
    function(err, response) {
        if (err) {
            console.log("error:", err);
        } else {
            console.log(JSON.stringify(response, null, 2));
        }
    }
);