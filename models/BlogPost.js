//BlogPost.js is a model file
// Definition of model: objects that represent collections in our database.
// Schema represents how a collection looks like. each document in the collection would have the fields specified in the schema.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
    title: String,
    body: String,
    username: String,
    datePosted:{/*can declare property type with an object like this because we need 'default'*/ type: Date,
    default: new Date()}
});


const BlogPost = mongoose.model('BlogPost', BlogPostSchema); //We access the database via mongoose.model . Mongoose automatically looks for the plural version.
                                                            // mongoose will create the model for our BlogPosts collection, not BlogPost collection.

module.exports = BlogPost; //export BlogPost variable so that when other files require this file, they know to grap BlogPost