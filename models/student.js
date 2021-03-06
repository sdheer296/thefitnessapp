const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

// The factSchema is used to embedded docs in as user doc.
// There is no model and no 'facts' collection
const factSchema = new mongoose.Schema({
  text: String
}, {
  timestamps: true
});

const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  facts: [factSchema],
  googleId: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Student', studentSchema);