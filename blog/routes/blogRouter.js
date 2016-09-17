var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');

var Blogs= require('../models/blogs');
var Verify=require('./verify');
var blogRouter = express.Router();

blogRouter.use(bodyParser.json());

blogRouter.route('/')
    .get(function(req, res, next) {
        console.log('req here');
        Blogs.find({}, function(err, blogs) {
            if (err) throw err;
            for(var i=0;i<blogs.length;i++){
            blogs[i].content=blogs[i].content.substring(0,100);
            console.log("after",blogs[i].content);
        }
            res.json(blogs);
        });
    })
    .post(Verify.verifyOrdinaryUser,function(req, res, next) {
        var blog=req.body;
        blog.username=req.decoded._doc.username;

        Blogs.create(blog,function(err, blog) {
            if (err) throw err;
            console.log("blog created");
            var id = blog._id;
            res.json({id:id});
        });
    });


blogRouter.route('/:blogId')
    .get(function(req, res, next) {
        Blogs.findById(req.params.blogId, function(err, blog) {
            if (err) throw err;
            res.json(blog);
        });
    })
    .put(Verify.verifyOrdinaryUser,function(req, res, next) {
        var blog = req.body;
        blog.username= req.decoded._doc.username; 
        Blogs.findByIdAndUpdate(req.params.blogId, { $set: blog}, { new: true }, function(err,blog) {
            if (err) throw err;
            res.json(blog);
        });
    });
    
    blogRouter.route('/user/:username')
    .get(function(req, res, next) {
        Blogs.find({username:req.params.username}, function(err, blog) {
            if (err) throw err;
            res.json(blog);
        });
       
    });
    

module.exports = blogRouter;
