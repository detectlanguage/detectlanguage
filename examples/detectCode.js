var detectlanguage = require('../lib')(process.env.DETECTLANGUAGE_API_KEY);

var text = "Hello! How are you?";

detectlanguage.detectCode(text).then(function(result) {
  console.log(JSON.stringify(result));
});
