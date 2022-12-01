const router = require('express').Router();
const teamCtl = require('../controllers/teamCtrl')

router.get('', teamCtl.getAllTeams)

router.get('/:id', teamCtl.getTeamById)

router.get('/name/:name', teamCtl.getTeamByName)

router.post('', teamCtl.create)

router.post('/:teamId', teamCtl.addLeagueToTeam)

router.delete('/:id', teamCtl.delete)

router.patch('/:id', teamCtl.update);



module.exports = router;
