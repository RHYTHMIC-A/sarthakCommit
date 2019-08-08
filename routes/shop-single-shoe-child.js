var router = require('express').Router();


router.get('/',function(req,res){
  res.render('main/shop-single-shoe-child');
});

module.exports = router;
