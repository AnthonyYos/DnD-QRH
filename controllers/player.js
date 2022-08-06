const Player = require('../models/character');

//@desc Get all player
//@route GET /api/v1/player
//@access Public
const getPlayers = async (req, res, next) => {
  try {
    // const players = await Player.find({}, '_id');
    const players = await Player.find({ type: 'player' });
    return res.status(200).json({ success: true, data: players });
  } catch (error) {
    return res.status(500).json({ success: false, error: 'Server error' });
  }
};

//@desc Get player by id
//@route GET /api/v1/player
//@access Public
const findPlayer = async (req, res, next) => {
  try {
    const player = await Player.findById(req.params.id);
    return res.status(200).json({ success: true, data: player });
  } catch (error) {
    return res.status(500).json({ success: false, error: 'Server error' });
  }
};

//@desc Post player
//@route post /api/v1/player
//@access Public
const addPlayer = async (req, res, next) => {
  try {
    const newPlayer = await Player.create(req.body);
    res.status(200).json({ success: true, data: newPlayer });
  } catch (err) {
    console.error(err.message);
  }
};

//@desc Put find/update player by id
//@route Put /api/v1/player/:id
//@access Public
const updatePlayer = async (req, res, next) => {
  try {
    const player = await Player.findByIdAndUpdate(req.params.id, req.body);
    if (!player) return res.status(401).json({ success: false, error: 'No player found' });
    return res.status(200).json({ success: true, data: player });
  } catch (error) {
    return res.status(500).json({ success: false, error: 'Server error' });
  }
};

//@desc Delete find/delete player by id
//@route delete /api/v1/player/:id
//@access Public
const deletePlayer = async (req, res, next) => {
  try {
    const player = await Player.findByIdAndDelete(req.params.id);
    if (!player) return res.status(401).json({ success: false, error: 'No player found' });
    return res.status(200).json({ success: true, data: {} });
  } catch (error) {
    return res.status(500).json({ success: false, error: 'Server error' });
  }
};

module.exports = {
  getPlayers,
  addPlayer,
  findPlayer,
  updatePlayer,
  deletePlayer,
};
