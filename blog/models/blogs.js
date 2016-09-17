var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema({
    username: {
        type: "String",
        required: true,
        
    },
    title:{
        type:String,
        required:true
    },
    content: {
        type: "String",
        required: true
    }
      }, {
    timestamps: true
});

var Blogs = mongoose.model('Blog', blogSchema);

module.exports = Blogs;