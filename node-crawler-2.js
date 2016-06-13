var request = require("request");
var fs = require("fs");
var cheerio = require("cheerio");

request({
  url: "http://web.pcc.gov.tw/pishtml/todaytender.html",
  method: "GET"
  }, function(e,r,b) {
    if(e || !b) { return; }
    var $ = cheerio.load(b);
    var result = [];
    //var titles = $('td').slice(4).eq(0).text();
	var titles = $('tr').children().slice(1).eq(0).text();
	console.log(titles);
    for(var i=0;i<titles.length;i++) {
      result.push($(titles[i]).text());
    }
    //fs.writeFileSync("result.json", JSON.stringify(result));
	console.log(result);
});
