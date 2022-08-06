const Enemy = require('../models/character');

//@desc Get all enemies
//@route GET /api/v1/enemies
//@access Public
const getEnemies = async (req, res, next) => {
  try {
    // const enemies = await Enemy.find({}, '_id');
    const enemies = await Enemy.find({ type: 'enemy' });
    return res.status(200).json({ success: true, data: enemies });
  } catch (error) {
    return res.status(500).json({ success: false, error: 'Server error' });
  }
};

//@desc Get enemy by id
//@route GET /api/v1/enemy
//@access Public
const findEnemy = async (req, res, next) => {
  try {
    const enemy = await Enemy.findById(req.params.id);
    return res.status(200).json({ success: true, data: enemy });
  } catch (error) {
    return res.status(500).json({ success: false, error: 'Server error' });
  }
};

//@desc Post player
//@route post /api/v1/player
//@access Public
const addEnemy = async (req, res, next) => {
  try {
    const newEnemy = await Enemy.create(req.body);
    res.status(200).json({ success: true, data: newEnemy });
  } catch (err) {
    console.error(err.message);
  }
};

//@desc Put find/update player by id
//@route Put /api/v1/player/:id
//@access Public
const updateEnemy = async (req, res, next) => {
  try {
    const enemy = await Enemy.findByIdAndUpdate(req.params.id, req.body);
    if (!enemy) return res.status(401).json({ success: false, error: 'No enemy found' });
    return res.status(200).json({ success: true, data: enemy });
  } catch (error) {
    return res.status(500).json({ success: false, error: 'Server error' });
  }
};

//@desc Delete find/delete player by id
//@route delete /api/v1/player/:id
//@access Public
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
