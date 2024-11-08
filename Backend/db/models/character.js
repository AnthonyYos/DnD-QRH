const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  armorClass: {
    type: String,
    required: true,
  },

  health: {
    type: String,
    required: true,
  },

  speed: {
    type: String,
    required: true,
  },

  saving_throws: String,

  skills: String,

  senses: String,

  languages: String,

  traits: String,

  actions: String,

  legendary_actions: String,

  meta: {
    type: String,
    required: true,
  },

  str: {
    type: Number,
    required: true,
  },

  dex: {
    type: Number,
    required: true,
  },

  con: {
    type: Number,
    required: true,
  },

  int: {
    type: Number,
    required: true,
  },

  wis: {
    type: Number,
    required: true,
  },

  cha: {
    type: Number,
    required: true,
  },

  str_mod: {
    type: Number,
    required: true,
  },

  dex_mod: {
    type: Number,
    required: true,
  },

  con_mod: {
    type: Number,
    required: true,
  },

  int_mod: {
    type: Number,
    required: true,
  },

  wis_mod: {
    type: Number,
    required: true,
  },

  cha_mod: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Character', characterSchema);
