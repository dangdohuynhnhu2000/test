var express = require('express');
var router = express.Router();

/* GET shop-details page. */
router.get('/', function(req, res, next) {
  res.render('../components/products/product_details');
});

module.exports = router;
