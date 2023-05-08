const mongoose = require('mongoose');

const coronaSchema = new mongoose.Schema({
  member: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Member',
    required: true
  },
  vaccineDates: {
    type: [Date],
    validate: {
      validator: function (dates) {
        return dates.length <= 4;
      },
      message: 'Maximum of 4 vaccine dates allowed'
    }
  },
  vaccineManufacturers: {
    type: [String],
    validate: {
      validator: function (manufacturers) {
        return manufacturers.length <= 4;
      },
      message: 'Maximum of 4 vaccine manufacturers allowed'
    }
  },
  positiveResultDate: {
    type: Date,
    validate: {
      validator: function(value) {
        const today = new Date();
        return value <= today;
      },
      message: 'Positive result date should be before or on today'
    }
  },
  recoveryDate: {
    type: Date,
    //ensures that the positiveResultDate field is present in the document
    required: function() {
      return this.positiveResultDate !== undefined;
    },
    validate: [
      {
        validator: function(value) {
          return value >= this.positiveResultDate;
        },
        message: 'Recovery date should be after positive result date'
      },
      {
        validator: function(value) {
          const today = new Date();
          return value <= today;
        },
        message: 'Recovery date should be before or on today'
      }
    ]
  }    
});

const Corona = mongoose.model('Corona', coronaSchema);

module.exports = Corona;