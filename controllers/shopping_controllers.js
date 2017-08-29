var express = require("express");
var db = require("../models");
var router = express.Router();

// import model(shopping.js) database functions
var shop = require("../models/shopping.js");

// Creating routers and logic
router.get("/", function(req, res){
	shopping.all(function(data){
		var hbsObject = {
			shopping: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

router.post("/browse", function(req, res){
	console.log(req.body.shopping_name);
	// shopping.create([
	// 	"shopping_name" , ""
	// ], [
	// 	req.body.name, req.body.
	// ],	function(){
	// 		res.redirect("/");
	// });
			
});

router.put("/:id", function(req, res){
	var condition = "id = " + req.params.search_id;
	console.log(condition);
	shopping.update({
		shop: req.body.clothes
	}, condition,function(){
			res.redirect("/");	
	});
});

// export routes for server.js
module.exports = router;