const router = require('express').Router();
const wrapAsync = require('../middleware/wrapAsync');
const player = require('../controllers/player');

router.route('/').get(wrapAsync(player.getPlayers)).post(wrapAsync(player.addPlayer));

router
  .route('/:id')
  .get(wrapAsync(player.findPlayer))
  .put(wrapAsync(player.updatePlayer))
  .delete(wrapAsync(player.deletePlayer));

module.exports = router;
