var express = require('express');
var router = express.Router();
var User=require('../models/user');
var passport = require('passport');
var Verify = require('./verify');


router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/user',Verify.verifyOrdinaryUser,function(req,res){
    var user=req.decoded._doc;
    res.json(user);
});


router.post('/register',function(req,res){
	console.log(req.body);
	User.register(new User({username:req.body.username,name:req.body.name}),req.body.password,function(err,user){
		if(err){
			return res.status(400).json({err: err});
		}
			passport.authenticate('local')(req, res, function () {
            return res.status(200).json({status: 'Registration Successful!'});
        });

	});


});

router.post('/login', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
    	
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(401).json({
                err: info
            });
        }
        req.logIn(user, function(err) {
            if (err) {
            	console.log("Inside",err);
                return res.status(500).json({
                    err: 'Could not log in user'
                });
            }

            var token = Verify.getToken(user);
            res.status(200).json({
                status: 'Login successful!',
                success: true,
                token: token
            });
        });
    })(req, res, next);
});

router.get('/logout', function(req, res) {
    req.logOut();
    res.status(200).json({
        status: 'Bye!'
    });
});


module.exports = router;