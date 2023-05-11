const Member = require('../models/memberModel');

exports.getAllMembers = async (req, res) => {
  try {
    // Retrieve all Members records from database
    const members = await Member.find();

    // Return all Member records
    res.json(members);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getMemberById = async (req, res) => {
  try {
    // Retrieve single Member record by ID from database
    const member =  await Member.findOne({ id: req.params.id });

    // Return error if Member record is not found
    if (!member) {
      return res.status(404).json({
        status: 'fail',
        message: 'Member not found',
      });
    }

    // Return single Member record
    res.json(member);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.createMember = async (req, res) => {
    try {
      const member = await Member.create(req.body);

      // Return new Member record
      res.status(201).json(member);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

