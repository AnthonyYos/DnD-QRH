const noCharacterError = { status: 404, message: 'Character not found.' };
const characterTypeError = { status: 200, message: 'Type of character was not specified.' };
const characterDAO = require('../service/characterDAO');

//@desc Get all characters of a type
//@route GET /api/v1/'resource type'
//@access Public
const getCharacters = async (req, res, next) => {
  const { filter, query } = req.query || {};
  // if (!characterType) throw characterTypeError;
  const characters = await characterDAO.getCharacters({ filter, value: query });
  return res.status(200).json({ characterData: characters });
};

//@desc Get character by id
//@route GET /api/v1/character
//@access Public
const findCharacter = async (req, res, next) => {
  const character = await characterDAO.findCharacter(req.params.id);
  if (!character) throw noCharacterError;
  return res.status(200).json({ characterData: character });
};

//@desc Post character
//@route post /api/v1/'resource type'
//@access Public
const addCharacter = async (req, res, next) => {
  const newCharacter = await characterDAO.createCharacter(req.body);
  if (newCharacter.status) throw newCharacter;
  res.status(200).json({ characterData: newCharacter });
};

//@desc Put find/update character by id
//@route Put /api/v1/'resource type'/:id
//@access Public
const updateCharacter = async (req, res, next) => {
  const character = await characterDAO.updateCharacter(req.params.id, req.body);
  if (!character) throw noCharacterError;
  return res.status(200).json({ characterData: character });
};

//@desc Delete find/delete character by id
//@route delete /api/v1/'resource type'/:id
//@access Public
const deleteCharacter = async (req, res, next) => {
  const character = await characterDAO.deleteCharacter(req.params.id);
  if (!character) throw noCharacterError;
  return res.status(200).json({ characterData: {}, status: 'Delete successful' });
};

module.exports = {
  getCharacters,
  addCharacter,
  findCharacter,
  updateCharacter,
  deleteCharacter,
};
