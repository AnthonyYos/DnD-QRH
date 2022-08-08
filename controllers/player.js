const Player = require('../models/character');

//@desc Get all player
//@route GET /api/v1/player
//@access Public
const getPlayers = async (req, res, next) => {
  // const players = await Player.find({}, '_id');
  const players = await Player.find({ type: 'player' });
  return res.status(200).json({ success: true, data: players });
};

//@desc Get player by id
//@route GET /api/v1/player
//@access Public
const findPlayer = async (req, res, next) => {
  const player = await Player.findById(req.params.id);
  return res.status(200).json({ success: true, data: player });
};

//@desc Post player
//@route post /api/v1/player
//@access Public
const addPlayer = async (req, res, next) => {
  const newPlayer = await Player.create(req.body);
  res.status(200).json({ success: true, data: newPlayer });
};

//@desc Put find/update player by id
//@route Put /api/v1/player/:id
//@access Public
const updatePlayer = async (req, res, next) => {
  const player = await Player.findByIdAndUpdate(req.params.id, req.body);
  if (!player) return res.status(401).json({ success: false, error: 'No player found' });
  return res.status(200).json({ success: true, data: player });
};

//@desc Delete find/delete player by id
//@route delete /api/v1/player/:id
//@access Public
const deletePlayer = async (req, res, next) => {
  const player = await Player.findByIdAndDelete(req.params.id);
  if (!player) return res.status(401).json({ success: false, error: 'No player found' });
  return res.status(200).json({ success: true, data: {} });
};

module.exports = {
  getPlayers,
  addPlayer,
  findPlayer,
  updatePlayer,
  deletePlayer,
};
