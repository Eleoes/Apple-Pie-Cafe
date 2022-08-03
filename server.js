/* =============== DEPENDENCIES =============== */
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const morgan = require('morgan');
const exp = require('constants');
require('dotenv').config();
const productsRouter = require('./controllers/products');

// initialize app
const app = express();

/* =============== CONFIGURATION =============== */
const PORT = process.env.PORT || "4000";
const MONGO_URL = process.env.MONGO_URL;
mongoose.connect(MONGO_URL);
const db = mongoose.connection;

/* All of this comes from Mongoose documentation */
db.on('error', (error)=> {
    console.error(error.message + `mongoDB error!`);
})

db.on('connected', () => {
    console.log('mongoDB successfully connected');
});

db.on('disconnected', () => {
    console.log('mongoDB disconnected');
});

/* =============== MIDDLEWARE =============== */
app.use(express.urlencoded({extended: false})); // body-parser
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(morgan('dev'));

// Mount route
app.get('/', (req,res) => {
    res.redirect('/applePieCafe');
});

app.use('/', productsRouter);

/* =============== LISTENER =============== */
app.listen(PORT, () => {
    console.log(`Express is listening on ${PORT}`)
});



