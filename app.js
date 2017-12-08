const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ngrx-db');


app.get('/', (req, res) => {
    res.send('hey');
});



app.listen(3000, () => {
    console.log('running on 3000');
})