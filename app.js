const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ngrx-db');

// Add Schema
const Schema = mongoose.Schema;
const propertyDetailSchema = new Schema({
    propertyname : {
        type:string,
        require:true
    },
    email : {
        type:string,
        require:true
    },
    phoneno : {
        type:number,
        require:true
    },
    city : {
        type:string,
        require:true
    },
    district : {
        type:string,
        require:true
    },
    state : {
        type:string,
        require:true
    }
}, {
        versionKey: false
});

app.get('/', (req, res) => {
    res.send('hey');
});



app.listen(3000, () => {
    console.log('running on 3000');
})