var api = "46e02f2d014a489ea182a65f77eb921e";
var urlQuery = "http://api.nytimes.com/svc/search/v1/article?format=json&query=" 
"&app-id=46e02f2d014a489ea182a65f77eb921e";

window.onload = function(){

    $.ajax({url:urlQuery, method:"GET"}).then(function(query){

        console.log(JSON.stringify(query));
    });
}
