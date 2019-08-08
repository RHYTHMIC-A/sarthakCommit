var router = require('express').Router();


router.get('/',function(req,res){
  res.render('main/shop');
});

module.exports = router;
