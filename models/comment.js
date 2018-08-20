let mongoose = require('mongoose');
let Schema = mongoose.Schema;

var CommentSchema = new Schema({
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    item: { type: Schema.Types.ObjectId, ref: 'Item' },
    comment: String,
    date: Number
});
module.exports = mongoose.model('Comment', CommentSchema);