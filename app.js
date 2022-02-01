const express = require('express');
const path = require('path');
const  app = express();
const mongoose = require('mongoose');
const { Console } = require('console');
mongoose.connect('mongodb://localhost/contect', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error: '));
const sec = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    massage: String
});

var model = mongoose.model('contect', sec);

//STATIC FILE LINK SECTION
app.use('/static', express.static('static'));
app.use(express.urlencoded({extended: true}));

//PUG CODE AREA
app.set('view engine', 'pug');
app.set("views", path.join(__dirname, "/views")); //set pug dir for pug templates

//REQUEST AREA USING EXPRESS
app.get('/', (req, res) => {
    res.status(200).render('index.pug');
});

app.get('/contectus', (req, res) => {
    res.status(200).render('contectus.pug');
});

app.post('/contectus', (req, res) => {
    var data = new model(req.body);
    data.save().then(()=> {
        res.render('contectus.pug');
    }).catch(()=>{
        res.status(500).send('Data is not Saved due to some server issue');
    });
});

//SERVER START AREA
app.listen(2500, ()=> {
    console.log("Server Started");
});