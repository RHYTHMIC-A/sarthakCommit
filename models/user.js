var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;
//bcrypt-> Hashes a password before it gets saved into DB such that pw saves in hashed format.

/*User Schema Attributes*/

var userSchema = new Schema({
  email: {type:String, unique: true, lowercase: true},
  password: String,

  profile: {
    name: {type: String, default: ''},
    picture: {type: String, default: ''}
  },

  address:String,
  history: [{
    date: Date,
    paid: {type: Number, default: 0},
    //item: {type: Schema.Type.ObjectId, ref:''}
  }]
});


/*Hash PW before saving in DB*/

userSchema.pre('save', function(next){
  var user = this;
  if (!user.isModified('password')) return next();
  bcrypt.genSalt(10, function(err, salt){
    if(err) return next(err);
    bcrypt.hash(user.password, salt, null, function(err, hash){
      if(err) return next(err);
      user.password= hash;
      next();
    });
  });
});

/*Compare PW in DB n entered one*/

userSchema.methods.comparePassword = function(password){
  return bcrypt.compareSync(password, this.password);
}


module.exports=mongoose.model("User",userSchema);
