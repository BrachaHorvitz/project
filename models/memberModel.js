
const mongoose = require('mongoose');

//match a string only if it contains one or more alphabetic characters (both uppercase and lowercase) and nothing else
const nameValidator = function(v) {
  return /^[a-zA-Z]+$/.test(v);
};

//matches any string of 9 digits
const idValidator = function(v) {
  return /^[0-9]{9}$/.test(v);
};

//matches phone numbers that start with the digit 0, followed by a digit between 2-9 or 5[^7], and then followed by 7 digits
const phoneValidator = function(v) {
  return /^0(5[^7]|[2-4]|[8-9]|7[0-9])[0-9]{7}$/.test(v);
};

const memberSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    validate: {
      validator: nameValidator,
      message: props => `${props.value} is not a valid first name!`
    }
  },
  lastName: {
    type: String,
    required: true,
    validate: {
      validator: nameValidator,
      message: props => `${props.value} is not a valid last name!`
    }
  },
  id: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: idValidator,
      message: props => `${props.value} is not a valid ID number`
    }
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
  telephone: {
    type: String,
    validate: {
      validator: phoneValidator,
      message: props => `${props.value} is not a valid telephone number!`
    }
  },
  mobilePhone: {
    type: String,
    required: true,
    validate: {
      validator: phoneValidator,
      message: props => `${props.value} is not a valid phone number!`
    }
  }
});

const Member = mongoose.model('Member', memberSchema);

module.exports = Member;

