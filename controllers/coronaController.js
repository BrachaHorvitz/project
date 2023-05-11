const Corona = require('../models/coronaModel');
const Member = require('../models/memberModel');

exports.createCorona = async (req, res) => {
  try {
    const member = await Member.findOne({ id: req.body.member });
    
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
    const coronas = await Corona.find();
    res.status(200).json(coronas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getCoronaById = async (req, res) => {
  try {
    const corona = await Corona.findById(req.params.id);
    if (!corona) {
      return res.status(404).json({
        status: 'fail',
        message: 'Corona not found',
      });
    }
    res.status(200).json(corona);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
