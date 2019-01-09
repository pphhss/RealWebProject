var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/loginaction',function(_req,_res){
  
  var loginConroller = require('../controllers/loginController').getInstance();

  loginConroller.acceptLogin(_req.body.id,_req.body.pw,function(_result){
    if(_result==null)

    
  });
});

module.exports = router;
