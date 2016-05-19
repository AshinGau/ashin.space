var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function (req, res) {
    res.render('ashin/home', {
        'webTitle':'阿xin的空间'
    });
});

router.get('/manager/write_log', function (req, res) {
    res.render('ashin/write_log', {
        'webTitle':'阿xin的空间·发布日志'
    });
});

router.get('/pithyUpload', function (req, res) {
    res.render('ashin/pithyUpload', {
        'webTitle':'pithyUpload'
    });
});

router.post('/pithyUpload', function (req, res) {
    res.send("success");
});

router.get('/uploadPreview', function (req, res) {
    res.render('ashin/uploadPreview', {
        'webTitle':'uploadPreview'
    });
});

module.exports = router;
