const Enemy = require('../models/character');
const noEnemiesError = { statusCode: 404, message: 'Enemies not found.' };
const noEnemyError = { statusCode: 404, message: 'Enemy not found.' };

//@desc Get all enemies
//@route GET /api/v1/enemies
//@access Public
const getEnemies = async (req, res, next) => {
  // const enemies = await Enemy.find({}, '_id');
  const enemies = await Enemy.find({ type: 'enemy' }).sort({ name: 'asc' });
  if (!enemies) throw noEnemiesError;
  return res.status(200).json({ success: true, data: enemies });
};

//@desc Get enemy by id
//@route GET /api/v1/enemy
//@access Public
const findEnemy = async (req, res, next) => {
  const enemy = await Enemy.findById(req.params.id);
  if (!enemy) throw noEnemyError;
  return res.status(200).json({ success: true, data: enemy });
};

//@desc Post player
//@route post /api/v1/player
//@access Public
const addEnemy = async (req, res, next) => {
  const newEnemy = await Enemy.create(req.body);
  res.status(200).json({ success: true, data: newEnemy });
};

//@desc Put find/update player by id
//@route Put /api/v1/player/:id
//@access Public
const updateEnemy = async (req, res, next) => {
  const enemy = await Enemy.findByIdAndUpdate(req.params.id, req.body);
  if (!enemy) throw noEnemyError;
  return res.status(200).json({ success: true, data: enemy });
};

//@desc Delete find/delete player by id
//@route delete /api/v1/player/:id
//@access Public
const deleteEnemy = async (req, res, next) => {
  const enemy = await Enemy.findByIdAndDelete(req.params.id);
  if (!enemy) throw noEnemyError;
  return res.status(200).json({ success: true, data: {} });
};

module.exports = {
  getEnemies,
  addEnemy,
  findEnemy,
  updateEnemy,
  deleteEnemy,
};
