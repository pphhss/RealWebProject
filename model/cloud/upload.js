var config = require('../../config').cloud;

var multer = require('multer');

var storage = multer.diskStorage({
    destination: function (_req, _file, _cb) {
        _cb(null, config.saveDirectory); // postition where you save file
    },
    filename: function (_req, _file, _cb) {
        _cb(null, _req.session.user + config.fileTag + _file.originalname); // filename that you save in our directory.
    }
})
var upload = multer({ storage: storage });

exports.upload = function () {
    return upload.single('hold');
}