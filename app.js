var express = require("express");
var path = require("path");
var fs = require("fs");
var ms = require("ms");
var app = express();
var router = express.Router();

var __port = "3031"
app.use(express.static(__dirname + "/ngWeb",{maxAge: 0,lastModified:true}));

app.all("*",function(req,res,next){
	res.set({
		'Access-Control-Allow-Origin': 'http://localhost:'+ __port,
		"Access-Control-Allow-Methods": "GET, POST, OPTIONS, DELETE, PUT",
		"Access-Control-Allow-Credentials":true
	});
	next();
});

app.get("/public/audio/list",function(req,res){
	fs.readdir("ngWeb/public/audio",function(err,files){
		var respons_data = files.map(function(item,idx){
			return {
				id: idx,
				name: item
			}
		});
		res.send({ code :0, result: respons_data });
	});
});
app.get("/public/audio/list/:name",function(req,res){
	var fileName = req.params.name + ".mp3";
	fs.readFile(path.resolve(__dirname + "/ngWeb/public/audio/" + fileName),function(err,data){
		// res.send(data);
		res.send(1);
	});
	// var stream = fs.createReadStream(path.resolve(__dirname + "/ngWeb/public/audio/" + fileName));
	
	
});

app.listen(__port);
