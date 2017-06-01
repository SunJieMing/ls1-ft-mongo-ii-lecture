const mongoose = require('mongoose');
const ToySchema = require('./toy');

const KittenSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    validate: {
      validator: (kittenName) => {
        return kittenName.length > 4;
      },
    },
  },
  evil: {
    type: Boolean,
    required: true,
  },
  exploding: {
    type: Boolean,
    required: true,
  },
  toys: [
    ToySchema
  ],
});

KittenSchema.pre('save', function(next) {
  console.log('I am about to be saved!');
  console.log(this);
  next();
});

KittenSchema.methods.sayMeow = function() {
  console.log('meow!');
  console.log(this);
};

KittenSchema.statics.sayMeow = () => {
  console.log('meow!');
};

module.exports = KittenSchema;
