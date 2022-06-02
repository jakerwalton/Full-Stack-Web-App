require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const methodOverride = require("method-override");
const path = require('path')
const favicon = require('serve-favicon')
const app = express();

const MONGODB_URI = process.env.MONGODB_URI

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

db = mongoose.connection;
db.on('error', (err) => console.log(`${err.message} is mongodb not running?`));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));
const imagesController = require('./controllers/comments');
app.use(imagesController);


// ==================== INDEX ====================
app.get('/', (req, res) => {
        res.render('index.ejs', {
    });
});

app.listen(process.env.PORT, () => {
    console.log('listening');
});