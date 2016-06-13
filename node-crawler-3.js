var request = require("request");
var fs = require("fs");
var cheerio = require("cheerio");

// Fetch a URL and parse all it's tables into JSON, using promises 
var tabletojson = require('tabletojson');
var url = 'http://web.pcc.gov.tw/pishtml/todaytender.html';
tabletojson.convertUrl(url).then(function(tablesAsJson) {
  var table = tablesAsJson[3];
  //var td2 = tablesAsJson[4];
  //console.log(td1,',',td2,'\n');
  console.log(table);
  fs.writeFileSync("table.json", JSON.stringify(table));
});