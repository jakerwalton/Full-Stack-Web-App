const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema ({
    body: String
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;