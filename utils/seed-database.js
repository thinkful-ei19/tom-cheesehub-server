'use strict';

const mongoose = require('mongoose');

const { DATABASE_URL } = require('../config');

const cheese = require('../seed');
const Cheese = require('../models/cheese');


mongoose.connect(DATABASE_URL)
  .then(() => mongoose.connection.db.dropDatabase())
  .then(() => {
    return Promise.all([
      Cheese.insertMany(cheese),
    ]);
  })
  .then(() => mongoose.disconnect())
  .catch(err => {
    console.error(`ERROR: ${err.message}`);
    console.error(err);
  });