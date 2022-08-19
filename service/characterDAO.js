const Character = require('../models/character');

const getCharacters = async ({ filter = null, value = null } = {}, resourceType) => {
  let query;
  if (!value) query = { type: `${resourceType}` };
  else
    switch (filter) {
      case 'race': {
        console.log('race');
        query = { race: value, type: `${resourceType}` };
        break;
      }
      case 'name': {
        console.log('name');
        query = { name: value, type: `${resourceType}` };
        break;
      }
      case 'alignment': {
        console.log('alignment');
        query = { alignment: value, type: `${resourceType}` };
        break;
      }
      default: {
        console.log('default');
        query = { type: `${resourceType}` };
        break;
      }
    }
  const characters = await Character.find(query).sort({ name: 'asc' });
  return characters;
};

const findCharacter = async id => {
  const character = await Character.findById(id);
  return character;
};

const createCharacter = async characterInfo => {
  const newCharacter = await Character.create(characterInfo);
  return newCharacter;
};

const updateCharacter = async (id, characterInfo) => {
  const updatedCharacter = Character.findByIdAndUpdate(id, characterInfo);
  return updatedCharacter;
};

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
