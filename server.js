var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var ejs_mate = require('ejs-mate');

var User = require('./models/user');

var app = express();

var password = 'ecommerce123';

mongoose.connect('mongodb+srv://tcs-ecommerce:' + password + '@ecommerce-tcs-qqgie.mongodb.net/test?retryWrites=true&w=majority',{
  useNewUrlParser:true
},function(err){
  if(err){
    console.log(err);
  }
  else{
    console.log("Connected To The Database");
  }
});

//Middleware
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.engine('ejs',ejs_mate);
app.set('view engine','ejs');

var homeRoutes = require('./routes/home');
var aboutRoutes =require('./routes/about');
var userRoutes = require('./routes/user');
var cartRoutes = require('./routes/cart');
var checkoutRoutes = require('./routes/checkout');
var thankyouroutes = require('./routes/thankyou');
var shopRoutes = require('./routes/shop');
var shopsingleroutes = require('./routes/shop-single');
var shopsinglecoratersroutes = require('./routes/shop-single-coraters');
var shopsinglepoloroutes = require('./routes/shop-single-polo');
var shopsinglemockuproutes = require('./routes/shop-single-mockup');
var womenRoutes= require('./routes/women');
var menRoutes = require('./routes/men');
var childrenRoutes = require('./routes/children');
var shopsingleshoemaleroutes= require('./routes/shop-single-shoe-male');
var shopsingleshoefemaleroutes= require('./routes/shop-single-shoe-female');
var shopsingleshoechildroutes= require('./routes/shop-single-shoe-child');
var shopsinglecricketroutes= require('./routes/shop-single-cricket');
var shopsinglejewelryroutes= require('./routes/shop-single-jewelry');
var shopsinglesunglassroutes= require('./routes/shop-single-sunglass');
var shopsingledenimfemaleroutes= require('./routes/shop-single-denim-female');
var shopsingledenimmaleroutes= require('./routes/shop-single-denim-male');
var shopsingleskatesroutes= require('./routes/shop-single-skates');
var shopsinglewalletroutes= require('./routes/shop-single-wallet');
var shopsinglehandbagroutes= require('./routes/shop-single-handbag');
var shopsinglebagroutes= require('./routes/shop-single-bag');
var shopsinglebottleroutes= require('./routes/shop-single-bottle');
var shopsinglecosmeticroutes= require('./routes/shop-single-cosmetic');
var shopsingletshirtroutes= require('./routes/shop-single-tshirt');
var shopsinglewatchroutes= require('./routes/shop-single-watch');
var shopsingletoyroutes= require('./routes/shop-single-toy');
var shopsingletoproutes= require('./routes/shop-single-top');
var contactRoutes = require('./routes/contact');


app.use('/home',homeRoutes);
app.use('/about',aboutRoutes);
app.use('/user',userRoutes);
app.use('/cart',cartRoutes);
app.use('/checkout',checkoutRoutes);
app.use('/thankyou',thankyouroutes);
app.use('/shop',shopRoutes);
app.use('/shop-single',shopsingleroutes);
app.use('/shop-single-coraters',shopsinglecoratersroutes);
app.use('/shop-single-polo',shopsinglepoloroutes);
app.use('/shop-single-mockup', shopsinglemockuproutes);
app.use('/women', womenRoutes);
app.use('/men',menRoutes);
app.use('/children',childrenRoutes);
app.use('/shop-single-shoe-male',shopsingleshoemaleroutes);
app.use('/shop-single-shoe-female',shopsingleshoefemaleroutes);
app.use('/shop-single-cricket',shopsinglecricketroutes);
app.use('/shop-single-shoe-child',shopsingleshoechildroutes);
app.use('/shop-single-jewelry',shopsinglejewelryroutes);
app.use('/shop-single-sunglass',shopsinglesunglassroutes);
app.use('/shop-single-denim-female',shopsingledenimfemaleroutes);
app.use('/shop-single-denim-male',shopsingledenimmaleroutes);
app.use('/shop-single-skates',shopsingleskatesroutes);
app.use('/shop-single-wallet',shopsinglewalletroutes);
app.use('/shop-single-handbag',shopsinglehandbagroutes);
app.use('/shop-single-bag',shopsinglebagroutes);
app.use('/shop-single-bottle',shopsinglebottleroutes);
app.use('/shop-single-cosmetic',shopsinglecosmeticroutes);
app.use('/shop-single-tshirt',shopsingletshirtroutes);
app.use('/shop-single-watch',shopsinglewatchroutes);
app.use('/shop-single-toy',shopsingletoyroutes);
app.use('/shop-single-top',shopsingletoproutes);
app.use('/contact',contactRoutes);

app.listen(3000, function(err){
  if (err) throw err;
  console.log("Server is Running on port 3000");
});

//mongoose: object relational mapper i.e virtual object DB, connects JS n Mongo DB.