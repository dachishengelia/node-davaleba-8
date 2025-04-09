const mongoose = require('mongoose');

const rejisorisSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dob: { type: Date },
});

module.exports = mongoose.model('rejisori', rejisorisSchema);
