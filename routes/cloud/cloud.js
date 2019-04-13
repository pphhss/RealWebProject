var express = require('express');
var router = express.Router();

var page = require('./cloudPage');
var action = require('./cloudAction');
var json = require('./cloudJSON');

//router.use("/JSON",json);
router.use(page);
router.use("/action",action);

module.exports = router;
