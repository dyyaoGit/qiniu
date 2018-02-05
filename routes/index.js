var express = require('express');
var router = express.Router();
var path = require('path');
var app = express();
var qiniuIndex = require('../api/qiniu.index');

/* GET home page. */
router.get('/', function (req, res, next) {
    var sendFile = path.join(app.get('views'),'/index.html');
    res.sendFile(sendFile);
});

router.get('/getToken', function(req, res, next) {
    console.log(qiniuIndex);
    res.json({data: qiniuIndex})
})

module.exports = router;
