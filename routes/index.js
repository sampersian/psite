"use strict";
var express = require('express');
var cors = require('cors');
var resume = require('../public/javascripts/resume.js');
var router = express.Router();
router.use(cors());

/* GET home page. */
router.get('/', function(req, res, next) {
  let now = new Date();
  var ip = req.connection.remoteAddress;
  let ua = req.get('User-Agent');
  console.log("home page requested :: "+now+" by "+req.ip)
  res.render('index');
});

router.get('/resume', function(req, res, next) {
  res.render("resume");
})

router.get('/contact', function(req, res, next) {
  res.render("contact");
})


router.get('/portfolio', function(req, res, next) {
  res.render("portfolio");
})

router.get('/demos', function(req, res, next) {
  res.render("demos");
})

router.get("/resumeJson", function(req, res, next) {
  res.send(resume);
})



module.exports = router;
