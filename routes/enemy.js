const router = require('express').Router();
const wrapAsync = require('../middleware/wrapAsync');
const enemyController = require('../controllers/enemy');

router
  .route('/')
  .get(wrapAsync(enemyController.getEnemies))
  .post(wrapAsync(enemyController.addEnemy));

router
  .route('/:id')
  .get(wrapAsync(enemyController.findEnemy))
  .put(wrapAsync(enemyController.updateEnemy))
  .delete(wrapAsync(enemyController.deleteEnemy));

module.exports = router;
