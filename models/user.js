let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let crypto = require('crypto');
let jsonwebtoken = require('jsonwebtoken');

var UserSchema = new Schema({
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    hash: { type: String, required: true },
	salt: String
});

UserSchema.methods.setPassword = function (password) {
	this.salt = crypto.randomBytes(32).toString('hex');
	this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 64, 'sha512').toString('hex');
}

UserSchema.methods.validPassword = function (password) {
	let hash = crypto.pbkdf2Sync(password, this.salt, 10000, 64, 'sha512').toString('hex');
  return this.hash === hash;
};

UserSchema.methods.generateJWT = function () {
  let today = new Date();
  let exp = new Date(today);
  exp.setDate(today.getDate() + 30);
  return jsonwebtoken.sign({
      id: this._id,
      username: this.username,
      exp: parseInt(exp.getTime() / 1000)
  }, process.env.JWT_SECRET);
};

module.exports = mongoose.model('User', UserSchema);