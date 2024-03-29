const router = require('express').Router();
const matchCtl = require('../controllers/matchCtrl')

router.get('', matchCtl.getAllMatches)

router.get('/limit', matchCtl.getMatches)

router.get('/day', matchCtl.getMatchesByDay)

router.get('/id/:id', matchCtl.getMatchById)

router.post('', matchCtl.create)

router.post('/home/:matchId/player/:playerId', matchCtl.addPlayerToHomeTeam)

router.post('/away/:matchId/player/:playerId', matchCtl.addPlayerToAwayTeam)

router.delete('/:id', matchCtl.delete)

router.patch('/:id', matchCtl.update);

module.exports = router;
