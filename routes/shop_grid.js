var express = require('express');
var router = express.Router();

/* GET shop-grid page. */
router.get('/', function(req, res, next) {
  res.render('shop_grid');
});

module.exports = router;
