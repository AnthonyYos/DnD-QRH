const noPartyError = { status: 404, message: 'Character not found.' };
const partyDAO = require('../service/partyDAO');

//@desc Get all party of a type
//@route GET /api/v1/'resource type'/party
//@access Public
const getParties = resourceType => {
  return async function (req, res, next) {
    // const { filter, query } = req.query || {};
    // const parties = await partyDAO.getParties({ filter, value: query }, resourceType);
    // return res.status(200).json({ success: true, data: parties });
    return res.status(200).json({ success: true, data: 'working' });
  };
};

//@desc Get character by id
//@route GET /api/v1/character
//@access Public
const findParty = async (req, res, next) => {
  // const party = await partyDAO.findParty(req.params.id);
  // if (!party) throw noPartyError;
  // return res.status(200).json({ success: true, data: party });
};

//@desc Post character
//@route post /api/v1/'resource type'
//@access Public
const addParty = async (req, res, next) => {
  // const newParty = await partyDAO.addPary();
  // res.status(200).json({ success: true, data: newParty });
};

//@desc Put find/update character by id
//@route Put /api/v1/'resource type'/:id
//@access Public
const updateParty = async (req, res, next) => {
  // const party = await partyDAO.updateCharacter(req.params.id, req.body);
  // if (!party) throw noCharacterError;
  // return res.status(200).json({ success: true, data: party });
};

//@desc Delete find/delete character by id
//@route delete /api/v1/'resource type'/:id
//@access Public
const deleteParty = async (req, res, next) => {
  // const party = await partyDAO.deleteParty(req.params.id);
  // if (!party) throw noCharacterError;
  // return res.status(200).json({ success: true, data: {} });
};

module.exports = { getParties, findParty, addParty, updateParty, deleteParty };
