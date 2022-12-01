const router = require('express').Router();
const favoriteCtl = require('../controllers/favoriteCtrl')

router.get('', favoriteCtl.getAllFavorites)

router.post('match/:matchId', favoriteCtl.addMatch)

router.post('league/:leagueId', favoriteCtl.addLeague)

router.delete('match/:id', favoriteCtl.deleteMatch)

router.delete('league/:id', favoriteCtl.deleteLeague)




module.exports = router;
