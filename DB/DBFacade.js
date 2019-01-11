var instance = null;

function DBFacadeController(){

}


DBFacadeController.prototype.login = function(_id,_pw,_callback){
  var login = require('./user/login');
  login.login(_id,_pw,_callback);
}

exports.getInstance = function(){
  if(instance==null)
    instance = new DBFacadeController();
  return instance;
}