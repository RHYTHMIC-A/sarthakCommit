var router = require('express').Router();


router.get('/',function(req,res){
  res.render('main/women');
});

module.exports = router;
