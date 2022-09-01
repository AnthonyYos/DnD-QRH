const router = require('express').Router();
const wrapAsync = require('../middleware/wrapAsync');
const characterController = require('../controllers/character');
const partyController = require('../controllers/party');

router
  .route('/')
  // getCharacters gets called and returns the async function, which is the passed to wrapAsync
  .get(wrapAsync(characterController.getCharacters('player')))
  .post(wrapAsync(characterController.addCharacter));

router.route('/party').get(wrapAsync(partyController.getParties('player')));
router
  .route('/party/:id')
  .get(wrapAsync(partyController.findParty))
  .put(wrapAsync(partyController.updateParty))
  .delete(wrapAsync(partyController.deleteParty));

router
  .route('/:id')
  .get(wrapAsync(characterController.findCharacter))
  .put(wrapAsync(characterController.updateCharacter))
  .delete(wrapAsync(characterController.deleteCharacter));

module.exports = router;
