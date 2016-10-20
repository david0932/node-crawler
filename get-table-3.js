var request = require("request");
var cheerio = require("cheerio");

request('http://web.pcc.gov.tw/pishtml/todaytender.html', function(error, response, body) {

  var $ = cheerio.load(body);
  var links = [];

  $('td').each(function() {
    console.log($(this).text());
	//var link = $(this).attr('href');
    //links.push({"link": link});
  });
  //console.log(links);
});