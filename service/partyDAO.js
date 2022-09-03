const Party = require('../models/party');

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
      case 'character name': {
        query = { characters: regex, type: `${resourceType}` };
        break;
      }
      default: {
        query = { type: `${resourceType}` };
        break;
      }
    }
  }
  const parties = await Party.find(query).populate('characters', 'name').sort({ name: 'asc' });
  return parties;
};

// Find party based on id and populate
const findParty = async id => {
  const party = await Party.findById(id).populate('characters', 'name').sort({ name: 'asc' });
  return party;
};

// Create a new party using partyInfo(req.body)
const createParty = async partyInfo => {
  const newParty = await Party.create(partyInfo);
  return newParty;
};

// Find
const updateParty = async (id, partyInfo) => {
  const updatedParty = await Party.findByIdAndUpdate(id, partyInfo);
  return updatedParty;
};

const deleteParty = async id => {
  const deletedParty = await Party.findByIdAndDelete(id);
  return deleteParty;
};

module.exports = { getParties, findParty, createParty, updateParty, deleteParty };
