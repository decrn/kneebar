var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');

let Item = require('../models/Item');
let Comment = require('../models/Comment');
let Category = require('../models/Category');

let jsonwebtoken = require('jsonwebtoken');
let expressjwt = require('express-jwt');
let auth = expressjwt({secret: process.env.JWT_SECRET, userProperty: 'user'});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('server works three');
});

router.get('/submissions', function(req, res, next) {
  Item.find({'type': 'submission'}, function(err, items) {
    if (err) { return next(err); }
    res.json(items);
  });
});

router.get('/positions', function(req, res, next) {
  Item.find({'type': 'position'}, function(err, items) {
    if (err) { return next(err); }
    res.json(items);
  });
});

router.get('/item/:name', function(req, res, next) {
  Item.findOne({'name': req.params.name}, function(err, item) {
    if (err) { return next(err); }
    res.json(item);
  });
});

router.get('/comments/:itemid', function(req, res, next) {
  Comment.find({'item': req.params.itemid}, function(err, comments) {
    if (err) { return next(err); }
    res.json(comments);
  });
});

router.route('/comment').post(auth, function(req, res, next) {
  if (req.headers && req.headers.authorization) {    
    try {
      let decoded = jsonwebtoken.verify(req.headers.authorization.split(" ")[1], process.env.JWT_SECRET);
      let comment = new Comment(
        {
          'item': req.body.item,
          'date': Math.round(new Date().getTime()/1000), 
          'comment': req.body.comment,
          'author': decoded.id
        }
      );
      comment.save(function(err, rec) {
        if (err){ return next(err); }
        res.json(rec);
      });
    } catch (err) {
      next(err);
    }
  }
});

router.get('/category/:name?', function(req, res, next) {
  let name = '';
  if (req.params.name) {
    name = req.params.name;
  }
  Category.findOne({'name': name}).populate('items').populate('subcategories').exec(function(err, category) {
    if (err) { return next(err); }
    res.json(category);
  });
});

router.route('/comments').get(auth, function(req, res, next) {
  if (req.headers && req.headers.authorization) {
    try {
        let decoded = jsonwebtoken.verify(req.headers.authorization.split(" ")[1], process.env.JWT_SECRET);
        Comment.find({author: decoded.id}, function(err, comments) {
          if (err) { return next(err); }
          res.json(comments);
        });
    } catch (e) {
        return res.status(401).send('unauthorized');
    }
  }
});

module.exports = router;
