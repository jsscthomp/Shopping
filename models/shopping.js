// get walking directions from central park to the empire state building
var http = require("http");
var authKey = "uid6676-39776974-43";
var methodName = "brands";
var url = "http://api.shopstyle.com/api/v2/products?pid=" + authKey + "&fts=men&offset=0&limit=10";

// get is a simple wrapper for request()
// which sets the http method to GET
var request = http.get(url, function (response) {
    // data is streamed in chunks from the server
    // so we have to handle the "data" event    
    var buffer = "", 
        data,
        route;

    response.on("data", function (chunk) {
        buffer += chunk;
    }); 

    response.on("end", function (err) {
        // finished transferring data
        // dump the raw data
        // console.log(buffer);
        console.log("\n");
        data = JSON.parse(buffer);
        // route = data.routes[0];
        // for(var i = 0; i < data.products.length; i++) {
        //     if(data.products[i].name=== "Charles David") {
        //         console.log("data");
        //         console.log(data.products[i].name);
        //     };
        // };
        //url to image
         console.log(data.products[0].image.sizes);
         console.log(data.products);
    }); 
}); 