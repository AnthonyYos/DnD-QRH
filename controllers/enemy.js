const Enemy = require('../models/character');
const noEnemiesError = { status: 404, message: 'Enemies not found.' };
const noEnemyError = { status: 404, message: 'Enemy not found.' };
const characterDAO = require('../service/characterDAO');
const resourceType = 'enemy';

//@desc Get all enemies
//@route GET /api/v1/enemies
//@access Public
const getEnemies = async (req, res, next) => {
  const { filter, query } = req.query || {};
  const enemies = await characterDAO.getCharacters({ filter, value: query }, resourceType);
  return res.status(200).json({ success: true, data: enemies });
};

//@desc Get enemy by id
//@route GET /api/v1/enemy
//@access Public
const findEnemy = async (req, res, next) => {
  const enemy = await characterDAO.findCharacter(req.params.id);
  if (!enemy) throw noEnemyError;
  return res.status(200).json({ success: true, data: enemy });
};

//@desc Post player
//@route post /api/v1/player
//@access Public
const addEnemy = async (req, res, next) => {
  const newEnemy = await characterDAO.createCharacter(req.body);
  res.status(200).json({ success: true, data: newEnemy });
};

//@desc Put find/update player by id
//@route Put /api/v1/player/:id
//@access Public
const updateEnemy = async (req, res, next) => {
  const enemy = await characterDAO.updateCharacter(req.params.id, req.body);
  if (!enemy) throw noEnemyError;
  return res.status(200).json({ success: true, data: enemy });
};

//@desc Delete find/delete player by id
//@route delete /api/v1/player/:id
//@access Public
const deleteEnemy = async (req, res, next) => {
  const enemy = await characterDAO.deleteCharacter(req.params.id);
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
