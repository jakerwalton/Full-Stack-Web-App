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
router.delete('/:id/:mongooseId', (req, res) => {
    Comment.findByIdAndDelete(req.params.mongooseId, () => {
        res.redirect(`/${req.params.id}`);
    });
});


// ==================== UPDATE ====================
router.put('/:id/:mongooseId', (req, res) => {
    Comment.findByIdAndUpdate(req.params.mongooseId, req.body, (err, updateComments) => {
        res.redirect(`/${req.params.id}`);
    });
});


// ==================== CREATE ====================
router.post('/:id', (req, res) => {
    Comment.create(req.body, (err, createdComment) => {
        res.redirect(`/${req.params.id}`);
    });
});


// ==================== EDIT ====================
router.get('/:id/:mongooseId/edit', (req, res) => {
    Comment.findById(req.params.mongooseId, (err, foundComment) => {
        res.render('comments/edit.ejs', {
            comment: foundComment,
            id: req.params.id
        });
    });
});

// ==================== SHOW ====================
router.get('/:id', (req, res) => {
    Comment.find({}, (err, foundComment) => {
        res.render('comments/show.ejs', {
            comment: foundComment,
            id: req.params.id
        });
    });
});



module.exports = router;