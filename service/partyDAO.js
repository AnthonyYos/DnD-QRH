const Party = require('../db/models/party');

// Find party(ies) based on search value/filter or by type
const getParties = async ({ filter = null, value = null } = {}, resourceType) => {
  let query;
  if (!value) query = { type: `${resourceType}` };
  else {
    let regex = new RegExp(value, 'i');
    switch (filter) {
      case 'party name': {
        query = { name: regex, type: `${resourceType}` };
        break;
      }
      case 'has character': {
        query = { characters: regex, type: `${resourceType}` };
        break;
      }
      case 'party size': {
        query = { characters: { $size: value }, type: `${resourceType}` };
        break;
      }
      default: {
        query = { type: `${resourceType}` };
        break;
      }
    }
  }
  const parties = await Party.find(query).populate('characters').sort({ name: 'asc' });
  return parties;
};

// Find party based on id and populate
const findParty = async id => {
  const party = await Party.findById(id).populate('characters').sort({ name: 'asc' });
  return party;
};

// Create a new party using partyInfo(req.body)
const createParty = async partyInfo => {
  const newParty = await Party.create(partyInfo);
  return newParty;
};

// Find party by id and update using partyInfo
const updateParty = async (id, partyInfo) => {
  const updatedParty = await Party.findByIdAndUpdate(id, partyInfo, { new: true });
  return updatedParty;
};

// Find party by id and delete
const deleteParty = async id => {
  const deletedParty = await Party.findByIdAndDelete(id);
  return deleteParty;
};

module.exports = { getParties, findParty, createParty, updateParty, deleteParty };
