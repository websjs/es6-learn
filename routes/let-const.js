var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){
    res.render('let-const', {
        title: 'Express',
        
    });
})

module.exports = router;