const router = require('express').Router();

router.get('', (req, res) => {
    res.json({"msg": "hallo"})
})

module.exports = router;
