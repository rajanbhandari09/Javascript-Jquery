/*Notes:
jQuery getJSON() method - $(selector).getJSON(url,data,success(data,status,xhr))
url	- Required. Specifies the url to send the request to
data - Optional. Specifies data to be sent to the server
success(data,status,xhr) - Optional. Specifies the function to run if the request succeeds
Additional parameters:
data - contains the data returned from the server.
status - contains a string containing request status ("success", "notmodified", "error", "timeout", or "parsererror").
xhr - contains the XMLHttpRequest object
*/

$(document).ready(function(){

$.getJSON('http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20IN%20(%22YHOO%22,%22AAPL%22)&format=json&env=http://datatables.org/alltables.env',function(info){

console.log(info)});
;





});