var express = require('express');
var app = express();
var db = require('./db');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var path = require('path');
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'us-west-1'});

var morgan = require('morgan');

var UrlController = require('./url/UrlController');

app.set('view engine','html');
app.set('views',__dirname + '/views');

app.use(morgan('dev'));
app.use(cookieParser());
app.use(session({secret:"zxcvbnmzxcvbnm", resave:false, saveUninitialized:true}));
app.use(express.static(__dirname + '/public'));

app.use('/url', UrlController);

app.get('/',function(req, res) {
	res.sendFile(path.join(__dirname,''));
});


module.exports = app;