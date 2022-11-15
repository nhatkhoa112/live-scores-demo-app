const router = require('express').Router();
const teamCtl = require('../controllers/teamCtrl')

router.get('', teamCtl.getAllTeams)

router.post('', teamCtl.create)

router.delete('/:id', teamCtl.delete)

router.patch('/:id', teamCtl.update);



module.exports = router;
