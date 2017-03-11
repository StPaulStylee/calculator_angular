const express = require('express');
const router = express.Router();

const solution = {solution: ''};

router.get('/', (req, res) => {
  res.send(solution);
});

router.post('/addition', (req, res) => {
  console.log('Received and addition request: ', req.body);
  solution.solution = req.body.valueA + req.body.valueB;
  console.log(solution);
  res.sendStatus(200);
});

router.post('/subtraction', (req, res) => {
  console.log('Received and subtraction request: ', req.body);
  solution.solution = req.body.valueA - req.body.valueB;
  res.sendStatus(200);
});

router.post('/multiplication', (req, res) => {
  console.log('Received and multiplcation request: ', req.body);
  solution.solution = req.body.valueA * req.body.valueB;
  res.sendStatus(200);
});

router.post('/division', (req, res) => {
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
