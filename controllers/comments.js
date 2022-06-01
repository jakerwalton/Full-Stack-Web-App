const express = require('express');
const router = express.Router();
const Comment = require('../models/comments.js');


// Index route is on main server.js

// ==================== NEW ====================
router.get('/new', (req, res) => {
    res.render("comments/new.ejs");
});


// ==================== DELETE ====================
router.delete('/:id', (req, res) => {
    Comment.findByIdAndDelete(req.params.id, () => {
        res.redirect('/comments');
    });
});


// ==================== UPDATE ====================
router.put('/:id', (req, res) => {
    Comment.findByIdAndUpdate(req.params.id, req.body, () => {
        res.redirect('/comments');
    });
});


// ==================== CREATE ====================
router.post('/', (req, res) => {
    Comment.create(req.body, (err, createdComment) => {
        res.redirect("/comments");
    });
});


// ==================== EDIT ====================
router.get('/:id/edit', (req, res) => {
    Comment.findById(req.params.id, (err, foundComment) => {
        res.render('comments/edit.ejs', {
            comment: foundComment
        });
    });
});

// ==================== SHOW ====================
router.get('/:id', (req, res) => {
    Comment.findById(req.params.id, (err, foundComment) => {
        res.render('comments/show.ejs', {
            comment: foundComment,
            id: req.params.id
        });
    });
});



module.exports = router;