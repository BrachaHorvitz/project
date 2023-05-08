
const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    city: {
      type: String,
      required: true
    },
    street: {
      type: String,
      required: true
    },
    number: {
      type: String,
      required: true
    }
  },
  birthDate: {
    type: Date,
    required: true
  },
  telephone: String,
  mobilePhone: {
    type: String,
    required: true
  }
});

const Member = mongoose.model('Member', memberSchema);

module.exports = Member;

