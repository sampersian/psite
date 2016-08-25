var express = require('express');
var cors = require('cors');
var router = express.Router();
router.use(cors());

/* GET home page. */
router.get('/', function(req, res, next) {
  let now = new Date();
  // res.timeStart = new Date();
  // ...
  // res.end(...);
  // var timeStop = new Date();
  // console.log('Elapsed ' + (timeStop-req.timeStart) + 'ms');
  var ip = req.connection.remoteAddress;
  let ua = req.get('User-Agent');
  console.log("home page requested :: "+now+" by "+req.ip)
  res.render('index');
});

module.exports = router;
