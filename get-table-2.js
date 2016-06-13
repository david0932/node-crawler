var request = require("request");
var cheerio = require("cheerio");

request('http://web.pcc.gov.tw/pishtml/todaytender.html', function(error, response, body) {

  var $ = cheerio.load(body);

  $('td').each(function() {
    console.log($(this).text());

  });
});