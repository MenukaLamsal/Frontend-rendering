const express = require('express');
const bodyParser = require('body-parser'); // takes and sends data in bson format
const cors = require('cors');   //to connect https request and response
// const axios = require('axios');


const mongoose = require('./db.js');

const Post = require('./Models/Post.js');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));  //url encryption


app.use(bodyParser.json());

//app.use(cors({origin: 'http://127.0.0.1:5500/clz_project'}));


// GET request to fetch users
// axios.get('/API_call/register.ejs')
//   .then(response => {
//     console.log("Data Received",response.data);
//     // Process the retrieved data
//   })
//   .catch(error => {
//     console.error('Failed to fetch data', error);
//   });


//to save data entered in the form to the database

 
// View engine setup to ejs
app.set('view engine', 'ejs');
 
// // With middleware
// app.use('/', function (req, res, next) {
//     res.render('register')
//     next();
// });
 
app.get('/register', (req, res) =>{
    res.render('register');
    console.log("Render Working")
});

// Middleware to parse form data
// app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// route to handle form submission
app.post('/register', async(req, res) => {
    const formData = req.body;
    const user = await Post.create(formData);
    res.render('register');
    // console.log(formData); 
});
                        

app.listen(3000, (req, res) => {
    console.log('Server is started at port 3000');
});
