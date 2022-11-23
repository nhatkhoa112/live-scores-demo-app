const router = require('express').Router();
const countryCtl = require('../controllers/countryCtrl')

router.get('', countryCtl.getAllCountries)

router.get('/:id', countryCtl.getAllCountryById)


router.post('', countryCtl.create)

router.delete('/:id', countryCtl.delete)

router.patch('/:id', countryCtl.update);

module.exports = router;
