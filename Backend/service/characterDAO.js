const Character = require('../db/models/character');

// Find character(s) based on search value/filter or by type
const getCharacters = async ({ filter = null, value = null } = {}) => {
  let query;
  if (!value) query = {};
  else {
    let regex = new RegExp(value, 'i');
    switch (filter) {
      case 'name': {
        query = { name: regex };
        break;
      }
      case 'meta': {
        query = { meta: regex };
        break;
      }
      // case 'alignment': {
      //   query = { alignment: regex, type: `${characterType}` };
      //   break;
      // }
      default: {
        query = '';
        break;
      }
    }
  }
  const characters = await Character.find(query).sort({ name: 'asc' });
  // const characters2 = await Character.find({ query }).sort({ name: 'asc' });
  return characters;
};

// Find character based on the object id
const findCharacter = async id => {
  const character = await Character.findById(id);
  return character;
};

// Create a new character using characterInfo(req.body)
const createCharacter = async characterInfo => {
  let newCharacter;
  try {
    newCharacter = await Character.create(characterInfo);
  } catch (error) {
    newCharacter = { status: 400, message: `${error._message}.` };
  } finally {
    return newCharacter;
  }
};

// Find and update a character using characterInfo(req.body)
const updateCharacter = async (id, characterInfo) => {
  const updatedCharacter = await Character.findByIdAndUpdate(id, characterInfo, { new: true });
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
