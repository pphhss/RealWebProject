var instance = null;

function LoginController(){
  
}

LoginController.prototype.acceptLogin = function(_id,_pw,_callback){
  
};

exports.getInstance = function(){
  if(instance==null)
    instance = new LoginController();
  return instance;
} 