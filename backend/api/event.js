const router = require('express').Router();
const eventCtl = require('../controllers/eventCtrl')

router.get('', eventCtl.getAllEvents)

router.get('/:id', eventCtl.getEventsInMatch)

router.post('', eventCtl.createEvent)

router.delete('/:id', eventCtl.deleteEvent)

router.patch('/:id', eventCtl.updateEvent);

module.exports = router;
