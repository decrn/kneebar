let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;

let User = require('./models/User');

passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
  }, function (username, password, done) {
	User.findOne({ username: username }, function (err, user) {
		if (err) return done(err);

		if (!user)
			return done(null, false, { message: 'Unknown username' });

		if (!user.validPassword(password))
			return done(null, false, { message: 'Invalid password' });
		
		return done(null, user);
	});
}));