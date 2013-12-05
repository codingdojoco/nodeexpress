var express = require('express.io');
var path = require('path');
var app = express().http().io();

// all environments
app.configure(function(){
	app.use(express.cookieParser());
	app.use(express.bodyParser());
	app.use(express.static(path.join(__dirname, 'public')));
	app.use(express.session({secret: 'monkey'}));
	app.set('view engine', 'ejs');
});

var route = require('./routes/index.js')(app);

app.listen(6789);
