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
// menú
router.get('/applePieCafe/menu', (req, res) => {
    Product.find({}, (error, allProducts) => {
        res.render('applePieCafe/menu.ejs', {allProducts})
    });
});

// NEW
router.get('/applePieCafe/menu/new', (req,res) => {
    res.render('applePieCafe/new.ejs');
});

// DELETE
router.delete('/applePieCafe/menu/:id', (req,res) => {
    Product.findByIdAndDelete(req.params.id, (error, product) => {
        res.redirect('/applePieCafe/menu');
    });
});

// UPDATE
router.put('/applePieCafe/menu/:id', (req,res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedProduct) => {
        res.redirect(`/applePieCafe/menu/${req.params.id}`)
    });
});

// EDIT
router.get('/applePieCafe/menu/:id/edit', (req, res) => {
    Product.findById(req.params.id, (error, product) => {
        res.render('applePieCafe/edit.ejs', {product})
    });
});

// SHOW
router.get('/applePieCafe/menu/:id', (req,res) => {
    Product.findById(req.params.id, (error, product) => {
        res.render('applePieCafe/show.ejs', {product});
    });
});

// export router so that we can requite it in server.js
module.exports = router;