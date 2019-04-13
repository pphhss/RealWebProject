var express = require('express');
var router = express.Router();
var cloudController = require('../../controllers/cloudController');

var auth = require('../../utils/auth');

router.post('/uploadFile',cloudController.uploadFile(),function(_req,_res){
    console.log(_req.file);
    _res.send("ok");
});

module.exports = router;