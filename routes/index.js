var express = require("express");
var app = express();
var multer  = require('multer');
var upload = multer({ dest: 'uploads'});

app.get("/",function(req,res){
   res.render("index",{title:"file Data"}); 
});

app.post("/upload",upload.single('file'),function(req,res){
   var obj ={
       "size": req.file.size
   };
   res.send(obj);
   
});

module.exports=app;