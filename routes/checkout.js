var router = require('express').Router();

router.get('/',function(req,res){
  res.render('main/checkout');
});

module.exports = router;
