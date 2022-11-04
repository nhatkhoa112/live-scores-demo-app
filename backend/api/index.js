const router = require('express').Router();
const matchRouter = require('./match')
const leagueRouter = require('./league')
const countryRouter = require('./country')
const teamRouter = require('./team')
const playerRouter = require('./player')


router.use('/match', matchRouter
)

router.use('/league', leagueRouter
)

router.use('/team', teamRouter
)

router.use('/country', countryRouter
)

router.use('/player', playerRouter
)



module.exports = router;
