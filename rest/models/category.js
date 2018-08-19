let mongoose = require('mongoose');
let Schema = mongoose.Schema;

var CategorySchema = new Schema({
    name: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    items: [{ type: Schema.Types.ObjectId, ref: 'Item' }],
    subcategories: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
    thumbnail: String
});
module.exports = mongoose.model('Category', CategorySchema);