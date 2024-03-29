const router = require('express').Router();
const playerCtl = require('../controllers/playerCtrl')

router.get('', playerCtl.getAllPlayers)

router.get('/name/:name', playerCtl.getPlayerByName)

router.post('', playerCtl.create)

router.post('/:playerId/team/:teamId', playerCtl.addTeamToPlayer)

router.delete('/:id', playerCtl.delete)

router.patch('/:id', playerCtl.update);

module.exports = router;

