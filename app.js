var exp = require("express");
var bodyParser = require("body-parser");
var app = exp();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
require('dotenv').config();

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,DELETE,PUT,OPTIONS,PATCH');
  res.setHeader('Access-Control-Allow-Headers','X-Requested-With,authtoken,isadmintoken,Accept,Content-Type,Authorization')
  // Pass to next layer of middleware
  next();
});

app.use('/api', require('./routes/config'));

app.listen(process.env.PORT,function(){
  console.log("server started");
})