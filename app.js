var express = require('express');
var app = express();
var models = require('./models');

// Setting for app here
app.use(express.static(__dirname + '/public'));
var expressHbs = require('express-handlebars');
var paginateHelper = require('express-handlebars-paginate');
var hbs = expressHbs.create({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/',
    helpers: {
        paginate: paginateHelper.createPagination
    }
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

var flash = require('connect-flash');

var cookieParser = require('cookie-parser');
app.use(cookieParser());

var session = require('express-session');
app.use(session({
	secret:"S3CRET",
	resave:false,
	saveUninitialized:false
}));

app.use(flash());
var passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());

var expressValidator=require('express-validator');
app.use(expressValidator());

app.use(function(req,res,next){
	res.locals.messages=req.flash();
	res.locals.user=req.user || null;
	next();
});

// Define your routes here
var shirts = require('./routes/shirts');
app.use('/design', shirts);

var users = require('./routes/users');
app.use('/users',users);

app.get('/', function (req, res) {
    res.render('index', {
        isIndex: true
    });
});

// app.get('/design', function (req, res) {
//     res.render('design', {
//         isDesign: true,
//     });
// });

app.get('/gallery', function(req, res){
    res.render('gallery', {
        isGallery: true,
    });
});
// Set Server Port & Start Server
app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function () {
    console.log('Server is listening at port ' + app.get('port'));
});