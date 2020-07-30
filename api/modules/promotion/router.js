var express = require('express')
var router = express.Router()
var promotion = require('./ctl_promotion.js')

//for admin only
router.post('/accept',promotion.acceptBonus)

router.get('/',promotion.getUnAccept)
module.exports = router;

//for user