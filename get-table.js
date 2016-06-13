var tabletojson = require('tabletojson');
var url = 'http://web.pcc.gov.tw/pishtml/todaytender.html';
tabletojson.convertUrl(url, function(tablesAsJson) {
  var listofSovereignStates = tablesAsJson[2];
  concole.log(listofSovereignStates);
});