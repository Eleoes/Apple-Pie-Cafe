// import models 
const Product = require('../models/product');

// initialize router objects
const router = require('express').Router(); // allows us to create routes in mvc structure

/* =============== ROUTES =============== */
// SEED
const seedData = require('../models/productSEED');
router.get('/seed', (req,res) => {
    Product.deleteMany({}, (error, allProducts) => {});
    Product.create(seedData, (error, data) => {
        res.redirect('/applePieCafe');
    });
});

// INDEX
router.get('/applePieCafe', (req,res) => {
    Product.find({}, (error, allProducts) => {
        res.render('applePieCafe/index.ejs', {allProducts}) //images in assets were not able to be rendered, had to upload to a host site
    });    
});

// export router so that we can requite it in server.js
module.exports = router;