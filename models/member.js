// member.js

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
    city: String,
    street: String,
    number: String
  },
  birthDate: {
    type: Date,
    required: true
  },
  telephone: String,
  mobilePhone: String
});

const Member = mongoose.model('Member', memberSchema);

module.exports = Member;