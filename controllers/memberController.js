const Member = require('../models/memberModel');

exports.getAllMembers = async (req, res) => {
  try {
    const members = await Member.find();
    res.json(members);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getMemberById = async (req, res) => {
  try {
    const member = await Member.findOne({id: req.params.id});
    res.json(member);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.createMember = async (req, res) => {
    try {
      const member = await Member.create(req.body);
      res.status(201).json(member);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

