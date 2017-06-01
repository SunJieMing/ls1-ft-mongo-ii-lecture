const mongoose = require('mongoose');

const ToySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = ToySchema;
