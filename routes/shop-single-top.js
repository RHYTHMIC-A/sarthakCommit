var router = require('express').Router();


router.get('/',function(req,res){
  res.render('main/shop-single-top');
});

module.exports = router;
