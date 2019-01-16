var express = require('express');
var router = express.Router();

router.post("/write",function(_req,_res){
  var bc = require('../../controllers/bbsController');
  var date = require('../../utils/date');

  console.dir(_req.body);
  var data = {
    title:_req.body.title,
    content:_req.body.bbs_write_content,
    time:date(),
    user_serial:_req.session.user.serial
  }


  bc.write(data,function(){
    _res.redirect('/bbs');
  });

});

module.exports = router;