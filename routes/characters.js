const router = require('express').Router();
const wrapAsync = require('../middleware/wrapAsync');
const characterController = require('../controllers/character');
const partyController = require('../controllers/party');

router
  .route('/')
  .get(wrapAsync(characterController.getCharacters))
  .post(wrapAsync(characterController.addCharacter));

router
  .route('/:id')
  .get(wrapAsync(characterController.findCharacter))
  .put(wrapAsync(characterController.updateCharacter))
  .delete(wrapAsync(characterController.deleteCharacter));

module.exports = router;
