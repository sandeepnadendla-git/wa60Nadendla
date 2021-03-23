var express = require('express');
var router = express.Router();
var num = Math.floor(Math.random()*100);

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('cbrt applied to ' + num + ' is ' + Math.cbrt(num));
});

module.exports = router;


