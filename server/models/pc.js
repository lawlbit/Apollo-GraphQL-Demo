const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pcSchema = new Schema({
    playerID: Number,
    storyID: Number,
    name: String,
    class: String,
    description: String
});

module.exports = mongoose.model('PC', pcSchema);