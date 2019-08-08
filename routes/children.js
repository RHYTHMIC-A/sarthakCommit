var router = require('express').Router();


router.get('/',function(req,res){
  res.render('main/children');
});

module.exports = router;
