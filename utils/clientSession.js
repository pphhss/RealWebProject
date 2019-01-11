
var verbose = require('../verbose');

module.exports = function(_req,_res,_next){
  
  if(_req.session.user){ // while user is in login
    _req.csession={
      id:_req.session.user.id,
      nickname : _req.session.user.nickname  
    };
  }else // while user is not in login
    _req.csession=0

  _next();
  
}