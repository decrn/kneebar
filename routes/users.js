var express = require('express');
var router = express.Router();

let passport = require('passport');
require('../jwt-strategy');

let User = require('../models/user');
let jsonwebtoken = require('jsonwebtoken');
let expressjwt = require('express-jwt');
let auth = expressjwt({secret: process.env.JWT_SECRET, userProperty: 'user'});


router.post('/register', function(req, res, next) {
  try {
    console.log(req.body);
    let user = new User(
      {
        'username': req.body.username,
        'email': req.body.email
      }
    );
    user.setPassword(req.body.password);
    user.save(function(err, rec) {
      if (err){ return next(err); }
      res.json(rec);
    });
  } catch (err) {
    return res.json({success: false, errorMessage: err.message});
  }
});

router.post('/login', function(req, res, next) {
  try {
    passport.authenticate('local', function(error, user, info){
      if (error) return next(error);

      if (user)
          return res.json({token: user.generateJWT()});
      else
          return next(info);
    })(req, res, next);
  } catch (err) {
    return res.json({success: false, errorMessage: err.message});
  }
});

router.route('/account').get(auth, function(req, res, next) {
  if (req.headers && req.headers.authorization) {
    try {
        let decoded = jsonwebtoken.verify(req.headers.authorization.split(" ")[1], process.env.JWT_SECRET);
        User.findById(decoded.id, function(err, user) {
          if (err) { return next(err); }
          res.json(user);
        });
    } catch (e) {
        return res.status(401).send('unauthorized');
    }
  }
});

module.exports = router;
