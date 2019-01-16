var dbfacade = require('../DB/DBFacade');


exports.write = function(_data,_callback){
  dbfacade.writeBoard(_data,_callback);
}

exports.getBbsList = function(_data,_callback){
  dbfacade.getBbsList(_data,_callback);
}

exports.getPages = function(_callback){
  dbfacade.getPages(_callback);
}

exports.getBb = function(_data,_callback){
  dbfacade.getBb(_data,_callback);
}
