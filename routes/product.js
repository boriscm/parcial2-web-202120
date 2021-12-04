var express = require('express');
var router = express.Router();
const {getProducts} = require('../controllers/product');

/* GET products listing. Please establish connection with getProduct function from controllers/product.js  */
router.get('/', function (req, res, next) {
  var a = getProducts();
  var r = [];
  const serch =  () =>{if(req.url.includes("=")){return req.url.split("=")["1"];} else return ""};
  b = a.filter( function(x) {if (x['name'].toLowerCase().includes(serch())) { return x;}});
  v = serch();
  res.send(
    b
  );
});

module.exports = router;
