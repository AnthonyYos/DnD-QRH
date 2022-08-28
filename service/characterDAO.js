const Character = require('../models/character');

// Find character(s) based on search value/filter or by type
const getCharacters = async ({ filter = null, value = null } = {}, resourceType) => {
  let query;
  if (!value) query = { type: `${resourceType}` };
  else {
    let regex = new RegExp(value, 'i');
    switch (filter) {
      case 'name': {
        query = { name: regex, type: `${resourceType}` };
        break;
      }
      case 'race': {
        query = { race: regex, type: `${resourceType}` };
        break;
      }
      case 'alignment': {
        query = { alignment: regex, type: `${resourceType}` };
        break;
      }
      default: {
        query = { type: `${resourceType}` };
        break;
      }
    }
  }
  const characters = await Character.find(query).sort({ name: 'asc' });
  return characters;
};

// Find character based on the object id
const findCharacter = async id => {
  const character = await Character.findById(id);
  return character;
};

// Create a new character using characterInfo(req.body)
const createCharacter = async characterInfo => {
  const newCharacter = await Character.create(characterInfo);
  return newCharacter;
};

// Find and update a character using characterInfo(req.body)
const updateCharacter = async (id, characterInfo) => {
  const updatedCharacter = Character.findByIdAndUpdate(id, characterInfo);
  return updatedCharacter;
};

// Find and delete character by object id
const deleteCharacter = async id => {
  const character = await Character.findByIdAndDelete(id);
  return character;
};

module.exports = {
  getCharacters,
  findCharacter,
  createCharacter,
  updateCharacter,
  deleteCharacter,
};
