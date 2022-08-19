const Player = require('../models/character');
const noPlayersError = { status: 404, message: 'Players not found.' };
const noPlayerError = { status: 404, message: 'Player not found.' };
const characterDAO = require('../service/characterDAO');
const resourceType = 'player';

//@desc Get all player
//@route GET /api/v1/player
//@access Public
const getPlayers = async (req, res, next) => {
  const { filter, query } = req.query || {};
  const players = await characterDAO.getCharacters({ filter, value: query }, resourceType);
  return res.status(200).json({ success: true, data: players });
};

//@desc Get player by id
//@route GET /api/v1/player
//@access Public
const findPlayer = async (req, res, next) => {
  const player = await await characterDAO.findCharacter(req.params.id);
  if (!player) throw noPlayerError;
  return res.status(200).json({ success: true, data: player });
};

//@desc Post player
//@route post /api/v1/player
//@access Public
const addPlayer = async (req, res, next) => {
  const newPlayer = await characterDAO.createCharacter(req.body);
  res.status(200).json({ success: true, data: newPlayer });
};

//@desc Put find/update player by id
//@route Put /api/v1/player/:id
//@access Public
const updatePlayer = async (req, res, next) => {
  const player = await characterDAO.updateCharacter(req.params.id, req.body);
  if (!player) throw noPlayerError;
  return res.status(200).json({ success: true, data: player });
};

//@desc Delete find/delete player by id
//@route delete /api/v1/player/:id
//@access Public
const deletePlayer = async (req, res, next) => {
  const player = await characterDAO.deleteCharacter(req.params.id);
  if (!player) throw noPlayerError;
  return res.status(200).json({ success: true, data: {} });
};

module.exports = {
  getPlayers,
  addPlayer,
  findPlayer,
  updatePlayer,
  deletePlayer,
};
