const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pcSchema = new Schema({
    id: Number,
    playerID: Number,
    storyID: Number,
    name: String,
    prof: String,
    description: String
});

module.exports = mongoose.model('PC', pcSchema);