const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  type: { type: String, required: true },
  name: {
    type: String,
    required: true,
  },
  armorClass: {
    type: Number,
    required: true,
  },
  health: {
    type: Number,
    required: true,
  },
  speed: {
    type: Number,
    required: true,
  },
  alignment: {
    type: String,
    required: true,
  },
  race: {
    type: String,
    required: true,
  },
  stats: {
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
  },
});

module.exports = mongoose.model('Character', characterSchema);
