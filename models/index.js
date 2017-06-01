const mongoose = require('mongoose');

module.exports = {
  Kitten: mongoose.model('Kitten', require('./kitten')),
  Toy: mongoose.model('Toy', require('./toy')),
};
