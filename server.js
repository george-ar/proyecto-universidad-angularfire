global.__base = __dirname + '/';

var express = require('express');
var bodyParser = require('body-parser');
var handlebars = require('express3-handlebars');
var session = require('express-session');

//My modules
var exportModules = require("./lib/exportModules");

//Auth config
var auth = require("./lib/auth");

//My credentials
var credentials = require("./credentials");

//APPs
var app = express();

//--------------VENDOR MODULES CONFIG-------------//

// set up handlebars view engine
handlebars = handlebars.create({ defaultLayout:'main' });

app.engine('handlebars', handlebars.engine);

app.set('view engine', 'handlebars');

// body parser
app.use(bodyParser.urlencoded({ extended: false }));

// set up HTTP PORT
app.set('port', process.env.PORT || 3000);

// set up public folder (Client files will be added here)
app.use(express.static(__dirname + '/public'));

// set cookies and session
app.use(session({
  secret: credentials.cookieSecret,
  cookie: { maxAge: 6000000 },
  resave: false,
  saveUninitialized: true
}));

//-------------------PAGES-----------------------//

// index page
app.get('/', function(req, res) {
	//console.log('home page');
	res.render('home', exportModules.config('home', req.session.userName));
});

// home page
app.get('/home', function(req, res) {
	//console.log('home page');
	res.render('home', exportModules.config('home', req.session.userName));
});

//about page
app.get('/about', function(req,res){
	//console.log('about page');
	res.render('about');
});

app.get('/iconLibrary', function(req,res){
	res.render('iconLibrary');
});

//logme page
app.get('/logme', function(req,res){
	//console.log('logme page');
	res.render('logme', exportModules.config('logme', req.session.userName));
});

//logout page
app.get('/logout', function(req,res){
	req.session.destroy(function(err) {
  		res.render('home', exportModules.config('home'));
	});
});

//inventory page
app.get('/inventory', function(req,res){
	res.render('inventory', exportModules.config('inventory', req.session.userName));
});

//-------------------POST EVENTS-----------------------//

app.post('/process', function(req,res){
	if (req.query.form === 'logme'){
		
		var registeredUser = auth.validateUser(req.body.user, req.body.pwd);

		if(registeredUser){
		    req.session.userName = req.body.user;
		    res.render('thankyou', exportModules.config('thankyou', req.session.userName));
		}
		else {
			res.render('invalidUser');
		}
		
	}
	
});

//------------------ERROR HANDLER---------------------//

// 404 page - catch-all handler (middleware)
app.use(function(req, res, next){
	res.status(404);
	res.render('404');
});

// 500 page - error handler (middleware)
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), function(){
  console.log( 'Express started on http://localhost:' + 
    app.get('port') + '; press Ctrl-C to terminate.' );
});
