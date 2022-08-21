const Enemy = require('../models/character');
const noEnemiesError = { status: 404, message: 'Enemies not found.' };
const noEnemyError = { status: 404, message: 'Enemy not found.' };
const characterDAO = require('../service/characterDAO');
const resourceType = 'enemy';

//@desc Get all characters of a type
//@route GET /api/v1/'resource type'
//@access Public
const getCharacters = role => {
  return async function (req, res, next) {
    const { filter, query } = req.query || {};
    const enemies = await characterDAO.getCharacters({ filter, value: query }, role);
    return res.status(200).json({ success: true, data: enemies });
  };
};

//@desc Get character by id
//@route GET /api/v1/character
//@access Public
const findCharacter = async (req, res, next) => {
  const character = await characterDAO.findCharacter(req.params.id);
  if (!character) throw noEnemyError;
  return res.status(200).json({ success: true, data: character });
};

//@desc Post character
//@route post /api/v1/'resource type'
//@access Public
const addCharacter = async (req, res, next) => {
  const newEnemy = await characterDAO.createCharacter(req.body);
  res.status(200).json({ success: true, data: newEnemy });
};

//@desc Put find/update character by id
//@route Put /api/v1/'resource type'/:id
//@access Public
const updateCharacter = async (req, res, next) => {
  const enemy = await characterDAO.updateCharacter(req.params.id, req.body);
  if (!enemy) throw noEnemyError;
  return res.status(200).json({ success: true, data: enemy });
};

//@desc Delete find/delete character by id
//@route delete /api/v1/'resource type'/:id
//@access Public
const deleteCharacter = async (req, res, next) => {
  const enemy = await characterDAO.deleteCharacter(req.params.id);
  if (!enemy) throw noEnemyError;
  return res.status(200).json({ success: true, data: {} });
};

module.exports = {
  getCharacters,
  addCharacter,
  findCharacter,
  updateCharacter,
  deleteCharacter,
};
