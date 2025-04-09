const mongoose = require('mongoose');
const rejisori = require('./rejisori');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  rejisori: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'rejisori',
    required: true
  },
});

module.exports = mongoose.model('Movie', movieSchema);
