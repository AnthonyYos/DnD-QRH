const Enemy = require('../models/enemy');

//@desc Get all enemies
//@route GET /api/v1/enemies
//@access Public
const getEnemies = async (req, res, next) => {
  try {
    // const enemies = await Enemy.find({}, '_id');
    const enemies = await Enemy.find();
    return res.status(200).json({ success: true, data: enemies });
  } catch (error) {
    return res.status(500).json({ success: false, error: 'Server error' });
  }
};

const findEnemy = async (req, res, next) => {
  try {
    const enemy = await Enemy.findById(req.params.id);
    return res.status(200).json({ success: true, data: enemy });
  } catch (error) {
    return res.status(500).json({ success: false, error: 'Server error' });
  }
};

const addEnemy = async (req, res, next) => {
  try {
    const newEnemy = await Enemy.create(req.body);
    res.status(200).json({ success: true, data: newEnemy });
  } catch (err) {
    console.error(err.message);
  }
};

const updateEnemy = async (req, res, next) => {
  try {
    const enemy = await Enemy.findByIdAndUpdate(req.params.id, req.body);
    if (!enemy) return res.status(401).json({ success: false, error: 'No enemy found' });
    return res.status(200).json({ success: true, data: enemy });
  } catch (error) {
    return res.status(500).json({ success: false, error: 'Server error' });
  }
};

const deleteEnemy = async (req, res, next) => {
  try {
    const enemy = await Enemy.findByIdAndDelete(req.params.id);
    if (!enemy) return res.status(401).json({ success: false, error: 'No enemy found' });
    return res.status(200).json({ success: true, data: {} });
  } catch (error) {
    return res.status(500).json({ success: false, error: 'Server error' });
  }
};

module.exports = {
  getEnemies,
  addEnemy,
  findEnemy,
  updateEnemy,
  deleteEnemy,
};
