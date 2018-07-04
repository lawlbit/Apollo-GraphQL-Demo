const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storySchema = new Schema({
    storyID: Number,
    name: String,
    description: String
});

module.exports = mongoose.model('Story', storySchema);