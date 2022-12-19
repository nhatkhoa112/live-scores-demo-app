const router = require('express').Router();
const playerCtl = require('../controllers/playerCtrl')

router.get('', playerCtl.getAllPlayers)

router.post('', playerCtl.create)

router.post('/:playerId/:teamId', playerCtl.addTeamToPlayer)

router.delete('/:id', playerCtl.delete)

router.patch('/:id', playerCtl.update);

module.exports = router;
