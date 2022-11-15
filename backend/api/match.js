const router = require('express').Router();
const matchCtl = require('../controllers/matchCtrl')

router.get('', matchCtl.getAllMatches)

router.post('', matchCtl.create)

router.delete('/:id', matchCtl.delete)

router.patch('/:id', matchCtl.update);

module.exports = router;
