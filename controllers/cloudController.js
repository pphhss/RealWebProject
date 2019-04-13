
exports.uploadFile = function(){
    var upload = require('../model/cloud/upload');
    return upload.upload();
}