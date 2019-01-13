
exports.login = function(_id,_pw,_callback){
  var login = require('./user/login');
  login.login(_id,_pw,_callback);
}

exports.checkDupId = function(_id,_callback){
  var registration = require('./user/registration');
  registration.checkDupId(_id,_callback);
}

exports.registration = function(_data,_callback){
  var r = require('./user/registration');
  r.registration(_data,_callback);
}