$(document).ready(function () {

function runQuery(numArticles, queryURL) {
// This variable will be pre-programmed with our authentication key
// (the one we received when we registered)
var authKey = "uid6676-39776974-43";

// These variables will hold the results we get from the user's inputs via HTML
var searchTerm = "";
var methodName = "brands";

// queryURLBase is the start of our API endpoint. The searchTerm will be appended to this when
// the user hits the search button
var queryURLBase = "https://api.shopstyle.com/api/v2/brands?pid=" + authKey + "&format=json";

// Counter to keep track of article numbers as they come in
var articleCounter = 0;

//ajax for API request
	$.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {
  	var obj = JSON.parse(response);
  	console.log(obj);
  });
};
runQuery();
console.log("test");

});//end of $(document).ready
