var express = require('express');
var router = express.Router();

/* GET shop-cart page. */
router.get('/', function(req, res, next) {
  res.render('../components/orders/checkout');
});

module.exports = router;
