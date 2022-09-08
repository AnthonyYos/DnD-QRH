const noPartyError = { status: 404, message: 'Party not found.' };
const partyDAO = require('../service/partyDAO');

//@desc Get all party of a type
//@route GET /api/v1/'resource type'/party
//@access Public
const getParties = async (req, res, next) => {
  const { filter, query, characterType } = req.query || {};
  const parties = await partyDAO.getParties({ filter, value: query }, characterType);
  return res.status(200).json({ success: true, data: parties });
};

//@desc Get Party by id
//@route GET /api/v1/Party
//@access Public
const findParty = async (req, res, next) => {
  const party = await partyDAO.findParty(req.params.id);
  if (!party) throw noPartyError;
  return res.status(200).json({ success: true, data: party });
};

//@desc Post Party
//@route post /api/v1/'resource type'
//@access Public
const addParty = async (req, res, next) => {
  const newParty = await partyDAO.createParty(req.body);
  res.status(200).json({ success: true, data: newParty });
};

//@desc Put find/update Party by id
//@route Put /api/v1/'resource type'/:id
//@access Public
const updateParty = async (req, res, next) => {
  const updatedParty = await partyDAO.updateParty(req.params.id, req.body);
  if (!updatedParty) throw noPartyError;
  return res.status(200).json({ success: true, data: updatedParty });
};

//@desc Delete find/delete Party by id
//@route delete /api/v1/'resource type'/:id
//@access Public
const deleteParty = async (req, res, next) => {
  const deletedParty = await partyDAO.deleteParty(req.params.id);
  if (!deletedParty) throw noPartyError;
  return res.status(200).json({ success: true, data: {} });
};

module.exports = { getParties, findParty, addParty, updateParty, deleteParty };
