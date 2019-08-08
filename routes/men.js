var router = require('express').Router();


router.get('/',function(req,res){
  res.render('main/men');
});

module.exports = router;
