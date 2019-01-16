var express = require('express');
var router = express.Router();

router.post('/bbslist',function(_req,_res){
  var bc = require('../../controllers/bbsController');
  bc.getBbsList({page:_req.body.page},function(_results){
    _res.send(JSON.stringify(_results));
  });
});

router.post('/pages',function(_req,_res){
  var bc = require('../../controllers/bbsController');
  bc.getPages(function(_result){
    _res.send(String(_result));
  });
});

module.exports = router;