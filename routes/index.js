var express = require('express');
var router = express.Router();
const toys = require('../modules/toys');
const createError = require('http-errors');
const bikes = require('../modules/bikes');
const food = require('../modules/foods');



router.get('/zulu/toys', function(req, res, next) {
  const location = req.query.location;
  var result = toys.get_toy_location(location);
  if (result != "") {
      res.setHeader('content-type', 'application/json');
     res.end(result);
    } else {
      next(createError(404));
    }
});


router.get('/zulu/toys/team', function(req, res, next) {
  var result = toys.get_team();
  if (result != "") {
      res.setHeader('content-type', 'application/json');
      res.end(result);
    } else {
      next(createError(404));
    }
});


router.get('/zulu/food', function(req, res, next) {
  const location = req.query.location;
  var result = food.get_food_location(location);
  if (result != "") {
      res.setHeader('content-type', 'application/json');
      res.end(result);
    } else {
      next(createError(404));
    }

});
router.get('/zulu/food/team', function(req, res, next) {
  var result = food.get_team();
  if (result != "") {
      res.setHeader('content-type', 'application/json');
      res.end(result);
    
    } else {
      next(createError(404));
    }

});

router.get('/zulu/bikes', function(req, res, next) {
  const location = req.query.location;
  var result = bikes.get_bike_location(location);
  if (result != "") {
      res.setHeader('content-type', 'application/json');
      res.end(result);
  }
      else if(result == "500")
      {
        next(createError(500));
    } else {
      next(createError(404));
    }

});
router.get('/zulu/bikes/team', function(req, res, next) {
  var result = bikes.get_team();
  if (result != "") {
      res.setHeader('content-type', 'application/json');
      res.end(result);
    } else {
      next(createError(404));
    }
});


module.exports = router;
