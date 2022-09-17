const router = require('express').Router();
const wrapAsync = require('../middleware/wrapAsync');
const partyController = require('../controllers/party');

router
  .route('/')
  .get(wrapAsync(partyController.getParties))
  .post(wrapAsync(partyController.addParty));

router
  .route('/:id')
  .get(wrapAsync(partyController.findParty))
  .put(wrapAsync(partyController.updateParty))
  .delete(wrapAsync(partyController.deleteParty));

module.exports = router;
