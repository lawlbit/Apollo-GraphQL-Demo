const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
    playerID: Number,
    playerName: String,
});

module.exports = mongoose.model('Player', playerSchema);