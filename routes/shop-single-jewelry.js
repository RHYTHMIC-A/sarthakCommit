var router = require('express').Router();


router.get('/',function(req,res){
  res.render('main/shop-single-jewelry');
});

module.exports = router;
