const express = require('express');
const router = express.Router();
const Comment = require('../models/comments.js');


// Index route is on main server.js

// ==================== NEW ====================
router.get('/:id/new', (req, res) => {
    res.render("comments/new.ejs", {
        id: req.params.id
    });
});


// ==================== DELETE ====================
router.delete('/:id', (req, res) => {
    Comment.findByIdAndDelete(req.params.id, () => {
        res.redirect('/');
    });
});


// ==================== UPDATE ====================
router.put('/', (req, res) => {
    Comment.findByIdAndUpdate(req.params.id, req.body, (err, updateComments) => {
        res.redirect('/:id');
    });
});


// ==================== CREATE ====================
router.post('/:id', (req, res) => {
    Comment.create(req.body, (err, createdComment) => {
        res.redirect(`/${req.params.id}`);
    });
});


// ==================== EDIT ====================
router.get('/:id/edit', (req, res) => {
    Comment.findById(req.params.id, (err, foundComment) => {
        res.render('comments/edit.ejs', {
            comment: foundComment,
            id: req.params.id
        });
    });
});

// ==================== SHOW ====================
router.get('/:id', (req, res) => {
    Comment.findById(req.params.id, (err, foundComment) => {
        res.render('comments/show.ejs', {
            exist: "yes",
            comment: foundComment,
            id: req.params.id
        });
    });
});



module.exports = router;