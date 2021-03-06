/**
 * Created by Anastasiia on 16.07.2017.
 */

const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');
const gws = require('./routes/gws')(router);
const news = require('./routes/news')(router);
const events = require('./routes/events')(router);
const admineditorarea = require('./routes/admineditorarea')(router);
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 8080;


// Database connection
mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
    if(err){
        console.log('Could NOT connect to dabase', err);
    }else{
        console.log('Connected to db' + config.db);
    }
});


// Frontend directory

app.use(cors({
    origin: 'http://localhost:4200'
}));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/frontend/dist/'));
app.use('/admineditorarea', admineditorarea);
app.use('/gws', gws);
app.use('/events', events);
app.use('/news', news);


// Connection to Angular 2 (index.html)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/frontend/dist/index.html'));
});


app.listen(port, () => {
   console.log('Hi!');
});
