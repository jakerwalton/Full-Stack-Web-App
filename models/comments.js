const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema ({
    body: String,
    imageId: Number
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;