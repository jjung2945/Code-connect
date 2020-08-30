const mongoose = require('mongoose');

const BlogPost = require('./models/BlogPost'); //we import BlogPost (from models/blogpost) model we just created by specifying its relative path. BlogPost represents the BlogPosts collection in the database 

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true}); //connect to the database

var id = '5f462cdecf857029906b2ea8';

BlogPost.findByIdAndDelete(id,{
    title:'Updated title'
}, (error, blogspot) =>{
    console.log(error, blogspot);
});


// BlogPost.create({
//     title: `The Mythbuster's Guide to Saving Money on EnergyBills`,
//     body: `If you have been ehre a long time, you might remember when I went to ITV Tonight to dispense...`
// },(error, blogpost)=>{
//     console.log(error, blogpost)
// }); // we create a new BlogPost document in our database with a function in BlogPost called create.