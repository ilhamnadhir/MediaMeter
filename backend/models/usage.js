// models/Usage.js
const mongoose = require('mongoose');

const usageSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  socialMediaApp: {
    type: String,
    enum: ['Facebook', 'Instagram', 'YouTube', 'Netflix', 'Twitter'],
    required: true,
  },
  usageTime: {
    type: Number,  // Time in minutes
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Usage = mongoose.model('Usage', usageSchema);
module.exports = Usage;
