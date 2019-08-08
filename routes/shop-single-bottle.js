var router = require('express').Router();


router.get('/',function(req,res){
  res.render('main/shop-single-bottle');
});

module.exports = router;
