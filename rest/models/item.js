let mongoose = require('mongoose');
let Schema = mongoose.Schema;

var ItemSchema = new Schema({
    name: { type: String, unique: true, required: true },
    title: String,
    description: String,
    submissions: [{ type: Schema.Types.ObjectId, ref: 'Item' }],
    related: [{ type: Schema.Types.ObjectId, ref: 'Item' }],
    image: String,
    thumbnail: String,
    video: String,
});
module.exports = mongoose.model('Item', ItemSchema);