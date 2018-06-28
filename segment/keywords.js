

var retext = require('retext');
var keywords = require('retext-keywords');
var nlcstToString = require('nlcst-to-string');



retext()
  .use(keywords)
  .process('Terminology mining, term extraction, term recognition, or glossary extraction, is a subtask of information extraction. The goal of terminology extraction is to automatically extract relevant terms from a given corpus.', function (err, file) {
    if (err) throw err;

    console.log('Keywords:');
    console.log(file.data);
    file.data.keywords.forEach(function (keyword) {
      console.log(nlcstToString(keyword.matches[0].node));
    });

    console.log();
    console.log('Key-phrases:');
    file.data.keyphrases.forEach(function (phrase) {
      console.log(phrase.matches[0].nodes.map(nlcstToString).join(''));
    });
  }
); 