const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); // 1613
const BlogPost = require('./models/BlogPost.js');//1635

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true});

const app = new express();
const ejs = require('ejs');
app.set('view engine', 'ejs'); //tell Express to use EJS as our templating engine

app.use(express.static('public'));


// line 17-18 should come before 20-24
app.use(bodyParser.json()); // 1613
app.use(bodyParser.urlencoded({extended:true}));

app.post('/posts/store', async (req,res)=>{
    //model creates a new doc with browser data
    await BlogPost.create(req.body)//1660 create method belongs to BlogPost
     res.redirect('/');  // 1613
 });
 

app.get('/', async (req, res) => {
    const blogposts = await BlogPost.find({});
    //res.sendFile(path.resolve(__dirname, 'pages/index.html'));
    res.render('index', {// by doing this, index.ejs view now has access to the blogposts variable.
        blogposts //original: blogposts: blogposts. key name and value name are same.
    });
});
app.get('/about', (req, res) => {
    //res.sendFile(path.resolve(__dirname, 'pages/about.html'));
    res.render('about');
});
app.get('/contact', (req, res) => {
    //res.sendFile(path.resolve(__dirname, 'pages/contact.html'));
    res.render('contact');
});
app.get('/post/:id', async(req, res) => {
    const blogpost = await BlogPost.findById(req.params.id)
    //res.sendFile(path.resolve(__dirname, 'pages/post.html'));
    res.render('post',{
        blogpost
    });
});

app.get('/posts/new', (req, res) =>{        //1448 of 3797
    res.render('create');
});



app.listen(4000, () => {
    console.log('App listening on port 4000');
});

