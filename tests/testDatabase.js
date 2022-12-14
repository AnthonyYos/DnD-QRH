const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const mongod = new MongoMemoryServer();
const Character = require('../db/models/character');
const Party = require('../db/models/party');

const connect = async () => {
  await mongod.start();
  const uri = mongod.getUri();
  await mongoose.connect(uri);
};

const initializeCharacter = async characterType => {
  const character = await Character.create({
    type: characterType,
    name: 'Character Test',
    race: 'Test',
    armorClass: '1',
    health: '1',
    speed: '1',
    alignment: 'Lawful Good',
    stats: {
      str: '1',
      dex: '1',
      con: '1',
      int: '1',
      wis: '1',
      cha: '1',
    },
    modifiers: {
      str_mod: '1',
      dex_mod: '1',
      con_mod: '1',
      int_mod: '1',
      wis_mod: '1',
      cha_mod: '1',
    },
  });
  return character;
};

const initializeEmptyParty = async partyType => {
  const party = await Party.create({ type: partyType, name: 'Party Test', characters: [] });
  return party;
};

const initializeParty = async partyType => {
  const character1 = await Character.create({
    type: partyType,
    name: 'Character Test',
    race: 'Test',
    armorClass: '1',
    health: '1',
    speed: '1',
    alignment: 'Lawful Good',
    stats: {
      str: '1',
      dex: '1',
      con: '1',
      int: '1',
      wis: '1',
      cha: '1',
    },
    modifiers: {
      str_mod: '1',
      dex_mod: '1',
      con_mod: '1',
      int_mod: '1',
      wis_mod: '1',
      cha_mod: '1',
    },
  });

  const character2 = await Character.create({
    type: partyType,
    name: 'Character Test 2',
    race: 'Test',
    armorClass: '1',
    health: '1',
    speed: '1',
    alignment: 'Lawful Good',
    stats: {
      str: '1',
      dex: '1',
      con: '1',
      int: '1',
      wis: '1',
      cha: '1',
    },
    modifiers: {
      str_mod: '1',
      dex_mod: '1',
      con_mod: '1',
      int_mod: '1',
      wis_mod: '1',
      cha_mod: '1',
    },
  });

  const party = await Party.create({
    type: partyType,
    name: 'Party Test',
    characters: [character1.id, character2.id],
  });
  return party;
};

const close = async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.disconnect();
  await mongod.stop();
};

const dropCollections = async () => {
  for (const collection in mongoose.connection.collections) {
    mongoose.connection.dropCollection(collection);
  }
};

module.exports = {
  connect,
  initializeCharacter,
  close,
  dropCollections,
  initializeEmptyParty,
  initializeParty,
};
