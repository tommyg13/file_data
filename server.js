var express = require("express");
var app = express();
var port = process.env.PORT || 8080;
var index = require("./routes/index.js");
var path = require("path");


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use("/",index);

app.listen(port,function(){
console.log("succesfuly connected to "+port);    
});

module.exports=app;