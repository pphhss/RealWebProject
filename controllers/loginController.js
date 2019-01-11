var instance = null;
var dbfacade = require('../DB/DBFacade').getInstance();

function LoginController(){
  
}

LoginController.prototype.login = function(_id,_pw,_callback){
  dbfacade.login(_id,_pw,_callback);
};

exports.getInstance = function(){
  if(instance==null)
    instance = new LoginController();
  return instance;
} 