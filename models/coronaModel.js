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
  positiveResultDate: Date,
  recoveryDate: Date
});

const Corona = mongoose.model('Corona', coronaSchema);

module.exports = Corona;