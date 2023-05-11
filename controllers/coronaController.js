const Corona = require('../models/coronaModel');
const Member = require('../models/memberModel');

exports.createCorona = async (req, res) => {
  try {
    // Retrieve single Member record by ID from database
    const member = await Member.findOne({ id: req.body.member });
    
    // if there's no member with the request ID - return error message
    if (!member) {
      return res.status(400).json({message: 'Member not found'});
    }

    const coronaData = { ...req.body, member: member._id};
    const corona = await Corona.create(coronaData);
    
    res.status(201).json(corona);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllCoronas = async (req, res) => {
  try {
    // Retrieve all Corona records from database
    const coronas = await Corona.find();

    // Return all Corona records
    res.status(200).json(coronas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getCoronaById = async (req, res) => {
  try {
    // Retrieve single Corona record by ID from database
    const corona = await Corona.findById(req.params.id);

    if (!corona) {
      // Return error if Corona record is not found
      return res.status(404).json({
        status: 'fail',
        message: 'Corona not found',
      });
    }

    // Return single Corona record
    res.status(200).json(corona);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
