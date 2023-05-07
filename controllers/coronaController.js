const Corona = require('../models/corona');

exports.getCoronaData = async (req, res) => {
  try {
    const memberId = req.params.memberId;
    const coronaData = await Corona.findOne({ memberId });
    if (!coronaData) {
      return res.status(404).send('Corona data not found');
    }
    res.json(coronaData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.addCoronaData = async (req, res) => {
  try {
    const { memberId, vaccines, positiveResultDate, recoveryDate } = req.body;
    let coronaData = await Corona.findOne({ memberId });
    if (coronaData) {
      return res.status(400).send('Corona data already exists');
    }
    coronaData = new Corona({
      memberId,
      vaccines,
      positiveResultDate,
      recoveryDate
    });
    await coronaData.save();
    res.json(coronaData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
