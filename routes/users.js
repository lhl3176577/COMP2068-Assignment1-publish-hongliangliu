/* author:Hongliang Liu 
   website name:Hongliang Liu
   Description:Assignment1 build simple personal profile website online.
*/
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
