"use strict";

const NaturalLanguageClassifierV1 = require("watson-developer-cloud/natural-language-classifier/v1");

const natural_language_classifier = new NaturalLanguageClassifierV1({
  username: "92cac92c-59b7-49c0-ad20-df0f66c06ada",
  password: "MrIOePbsNZWx",
  version: "v1"
});

natural_language_classifier.status({
  classifier_id: "90e7acx197-nlc-2835" },
  function(err, response) {
    if (err)
      console.log("error:", err);
    else
      console.log(JSON.stringify(response, null, 2));
});