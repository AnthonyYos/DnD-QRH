const mongoose = require('mongoose');

const partySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Character',
      },
    ],
  },
  { collation: { locale: 'en_US', strength: 2 } }
);

module.exports = mongoose.model('Party', partySchema);
