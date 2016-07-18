var request;
if(window.XMLHttpRequest){
	request = new XMLHttpRequest();
}
else{
	request = new ActiveXObject("Microsoft.XMLHTTP");
}

request.open('GET','http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20IN%20(%22YHOO%22,%22AAPL%22)&format=json&env=http://datatables.org/alltables.env');
request.onreadystatechange = function(){
if(request.status == 200 && request.readyState==4){
var info = JSON.parse(request.responseText);
console.log(info);


}


}

request.send();