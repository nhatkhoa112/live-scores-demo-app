const router = require('express').Router();
const playerCtl = require('../controllers/playerCtrl')

router.get('', playerCtl.getAllPlayers)

router.get('/:teamId', playerCtl.getPlayerInTeam)

router.post('', playerCtl.create)

router.post('/player/:id/team/:teamId', playerCtl.addTeamToPlayer)

router.delete('/:id', playerCtl.delete)

router.patch('/:id', playerCtl.update);

module.exports = router;
