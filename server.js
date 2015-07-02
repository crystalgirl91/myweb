var http = require('http');
var express = require("express");

var app = express();
app.listen(3000);
app.post("/user/singin",function(req,res){
	var _mess = req.body;
	console.log(_mess);
})
