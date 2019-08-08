var router = require('express').Router();


router.get('/',function(req,res){
  res.render('main/thankyou');
});

module.exports = router;
