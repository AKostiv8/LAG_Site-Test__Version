/**
 * Created by Anastasiia on 16.07.2017.
 */

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
    if(err){
        console.log('Could NOT connect to dabase', err);
    }else{
        console.log('Connected to db' + config.db);
    }
});

app.use(express.static(__dirname + '/frontend/dist/'));


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/frontend/dist/index.html'));
})

app.listen(8080, () => {
   console.log('Hi!');
});
