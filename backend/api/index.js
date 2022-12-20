const router = require('express').Router();
const matchRouter = require('./match')
const leagueRouter = require('./league')
const countryRouter = require('./country')
const teamRouter = require('./team')
const playerRouter = require('./player')
const eventRouter = require('./event')


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

router.use('/event', eventRouter
)




module.exports = router;
