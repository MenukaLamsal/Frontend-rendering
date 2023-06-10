const mongoose = require('mongoose');


const Post = mongoose.model('Post',{
    Name : {type : String},
    Email : { type : String },
    Address : { type : String },
    Phone: { type : Number },
    Gender : { type : String },
    Password : { type : String },
    ConfirmPassword : { type : String }
});

module.exports = Post;