var express = require('express');
var usersController = require('../controllers/usersController.js');
var passport = require('passport');

let LocalStrategy = require('passport-local').Strategy;
let router =  express.Router();

router.get('/', function(req, res){
	res.render('pages/users');
});
router.get('/register', function(req, res){
  	res.render('pages/register', {isRegister: true});
});
router.post('/register', function(req, res){
  	let name = req.body.name;
	let email = req.body.email;
	let password = req.body.password;
	let cfm_pwd = req.body.cfm_pwd;

	req.checkBody('name', 'Name is required').notEmpty();
	req.checkBody('email', 'Email is required').notEmpty();
	req.checkBody('email', 'Please enter a valid email').isEmail();
	req.checkBody('password', 'Password is required').notEmpty();
	req.checkBody('cfm_pwd', 'Confirm Password is required').notEmpty();
	req.checkBody('cfm_pwd', 'Confirm Password Must Matches With Password').equals(password);

	let errors = req.validationErrors();
	if(errors)
	{
		res.render('pages/register',{errors: errors});
	}
	else
	{
		var user = {
		name: name,
		email: email,
        password: password,
        isAdmin:false
		};
		usersController.createUser(user, function(err){
			if(err) throw err;
			else console.log(user);
		});
		req.flash('success_message','You have registered, Now please login');
		res.redirect('login');
	}
});

router.get('/login', function(req, res){
  	res.render('pages/login',{isLogin: true});
});

passport.use(new LocalStrategy({
	usernameField: 'email',
	passwordField: 'password',
	passReqToCallback : true
},
	function(req, email, password, done) {
		usersController.getUserByEmail(email, function(err, user) {
			if (err) { return done(err); }
	  		if (!user) {
				return done(null, false, req.flash('error_message', 'No email is found'));
	  		}
	  		usersController.comparePassword(password, user.password, function(err, isMatch) {
				if (err) { return done(err); }
				if(isMatch){
		  				return done(null, user, req.flash('success_message', 'You have successfully logged in!!'));
				}
				else{
		  				return done(null, false, req.flash('error_message', 'Incorrect Password'));
				}
	 		});
		});
  	}
));

passport.serializeUser(function(user, done) {
  	done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    usersController.getUserById(id, function(err, user) {
		done(err, user);
  	});
});

router.post('/login', passport.authenticate('local', {
	failureRedirect: '/users/login', failureFlash: true
	}), 
	function(req, res){
		req.flash('success_message', 'You are now Logged in!!');
          res.redirect('/');
          console.log('Dang nhap thanh cong');
	}
);

router.get('/logout', function(req, res){
	req.logout();
	req.flash('success_message', 'You are logged out');
	res.redirect('/users/login');
});

module.exports = router;
