var config = require('../config').db;
var mysql = require('mysql');

var instance = null;

function Pool(){
  this.pool=null;
}

Pool.prototype.init = function(){
  this.pool = mysql.createPool({
    connectionLimit : config.connectionLimit,
    host : config.host,
    user : config.user,
    password : config.password,
    database : config.database
  });
}


exports.getPool = function(){
  if(instance==null)
    instance = new Pool();
  
  if(instance.pool==null)
    instance.init();
  
    return instance.pool;
}


