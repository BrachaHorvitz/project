const mongoose = require('mongoose');

const coronaSchema = new mongoose.Schema({
  member: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Member',
    required: true,
    unique: true
  },
  vaccineDates: {
    type: [Date],
    validate: [
      {
        // Check that the array has at most four elements
        validator: function(dates) {
          return dates.length <= 4;
        },
        message: 'Maximum of 4 vaccine dates allowed'
      },
      {
        // Check that all dates in the array are before or on today's date
        validator: function(dates) {
          return dates.every(date => date <= new Date());
        },
        message: 'All vaccine dates should be before or on today'
      }
    ]
  },
  vaccineManufacturers: {
    type: [String],
    validate: {
      // check that the number of manufacturers is the same as vaccine dates
      validator: function (manufacturers) {
        return manufacturers.length === this.vaccineDates.length;
      },
      message: 'Number of manufacturers should be the same as vaccine dates'
    }
  },
  // A date representing the date of a positive Corona test result
  positiveResultDate: {
    type: Date,
    validate: {
      // Check that the date is before or on today's date
      validator: function(value) {
        const today = new Date();
        return value <= today;
      },
      message: 'Positive result date should be before or on today'
    }
  },
  // A date representing the date of recovery from Corona
  recoveryDate: {
    type: Date,
    validate: [
      {
        // Check that recovery date is null when positiveResultDate is null
        validator: function(value){
          return value === null || this.positiveResultDate !== null;
        },
        message: 'There is no positive result date'
      },
      {
        // Check that recovery date is after positiveResultDate
        validator: function(value) {
          return value >= this.positiveResultDate;
        },
        message: 'Recovery date should be after positive result date'
      }
    ]
  }    
});

const Corona = mongoose.model('Corona', coronaSchema);

module.exports = Corona;