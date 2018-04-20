'use strict';

const mongoose = require('mongoose');

const cheeseSchema = new mongoose.Schema({
  name: { type: String },
});

module.exports = mongoose.model('Cheese', cheeseSchema);
