const express = require('express');
const router = express.Router();

var solution = {solution: ''};

router.get('/', function(req, res){
  res.send(solution);
});

router.post('/addition', function(req, res){
  console.log('Received and addition request: ', req.body);
  solution.solution = req.body.valueA + req.body.valueB;
  console.log(solution);
  res.sendStatus(200);
});

router.post('/subtraction', function(req, res){
  console.log('Received and subtraction request: ', req.body);
  solution.solution = req.body.valueA - req.body.valueB;
  res.sendStatus(200);
});

router.post('/multiplication', function(req, res){
  console.log('Received and multiplcation request: ', req.body);
  solution.solution = req.body.valueA * req.body.valueB;
  res.sendStatus(200);
});

router.post('/division', function(req, res){
  if (req.body.valueB === 0) {
    res.sendStatus(422);
  } else {
  console.log('Received and addition request: ', req.body);
  solution.solution = req.body.valueA / req.body.valueB;
  res.sendStatus(200);
  }
});


//export the router to the server
module.exports = router;
