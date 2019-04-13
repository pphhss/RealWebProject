var express = require('express');
var router = express.Router();

var auth = require('../../utils/auth');

router.get('/',function(_req,_res){
//    if(auth.auth(_req)){ // if user auth
        _res.render('layout/main', { body: "../cloud/cloud",csession: _req.csession });
//    }
});


module.exports = router;