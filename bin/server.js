var express = require("express");
var http = require("http");
var bodyParser = require('body-parser');
// var multer = require('multer');
var formidable = require('formidable');
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/test");
var db = mongoose.connection;

var Schema = mongoose.Schema;

var	panelSchema = mongoose.Schema({
    name: String,
    img: String,
    describe: String
});

var panelModel = mongoose.model("kitten",panelSchema);

var panel = new panelModel({
	name : "huangqiong",
	img: "huangqiong.jpg",
	describe: "this is the test project!"
});


var app = express();

http.createServer(app).listen(1337 ,"127.0.0.1" ,function(){
	console.log("listen at 1337 port")
});

var jsonParser = bodyParser.json({extended : true});
var urlencodedParse = bodyParser.urlencoded({extended : true});

// var upload = multer();
app.use(express.static('E:/mygit/myweb'));
app.post("/documents",function(req,res){
	var form = new formidable.IncomingForm();
	form.parse(req,function(err,fields,files){
		console.log("ok");
		res.status(200).send("this is ok");
	});
	form.on('progress', function(bytesReceived, bytesExpected) {
		console.log(bytesReceived,bytesExpected);
	});

	
})

// app.post("/login", urlencodedParse, function(req,res){
// 	res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });
// 	res.end(JSON.stringify(req.body));
// });
// app.post("/new",function(req,res){
// });
// app.get("/productions", function(req,res){
// 	var data = panelModel.find();
// 	console.log(data);
// 	res.end(JSON.stringify());
// });


