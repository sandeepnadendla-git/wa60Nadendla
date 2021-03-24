var express = require('express');
var router = express.Router();



/* GET users listing. */
router.get('/', function (req, res, next) {
    var num = Math.floor(Math.random() * 100);

    fake_url = "https://fake.com/path" + req.url
    const url = new URL(fake_url)
    const search_params = url.searchParams;
    let x = search_params.get("x");
    if(x==null||x==""){

        res.send('cbrt applied to ' + num + ' is ' + Math.cbrt(num));
    }
    else{
        res.send('cbrt applied to ' + x + ' is ' + Math.cbrt(x));
        
    }
    console.log(x);

});


module.exports = router;


