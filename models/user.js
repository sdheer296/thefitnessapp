const mongoose = require('mongoose');

// The factSchema is used to embedded docs in as user doc.
// There is no model and no 'facts' collection
const factSchema = new mongoose.Schema({
  text: String
}, {
  timestamps: true
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  cohort: String,
  avatar: String,
  facts: [factSchema],
  googleId: String
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);