var mongoose = require('mongoose');
var Schema =  mongoose.Schema;
var router = require('express').Router();

router.get('/',function(req,res){
  res.render('main/cart');
});



// var CartSchema = new Schema({
//    owner:{type: mongoose.Schema.Types.ObjectId,ref :'User'},
//    total:{type: Number, default: 0},
//    items:[{
//      item:{type: mongoose.Schema.Types.ObjectId, ref: 'Product'},
//      quantity:{type: Number, default: 1},
//      price:{type: Number, default: 0},
//    }]
// });


// module.exports = mongoose.model('Cart',CartSchema);




module.exports = router;
