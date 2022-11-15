const router = require('express').Router();
const leagueCtl = require('../controllers/leagueCtrl')


router.get('', leagueCtl.getAllLeagues)

router.post('', leagueCtl.create)

router.delete('/:id', leagueCtl.delete)

router.patch('/:id', leagueCtl.update);


module.exports = router;
