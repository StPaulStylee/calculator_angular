const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const solutionRouter = require('./routes/solution.js');

//middleware for parsing input data and turning it into an object
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//middleware that makes everything in the public folder accesible
app.use(express.static('public'));


//sends requests that start with /solution to the solutions router
app.use('/solution', solutionRouter);

//connecting to the index.html file
app.get('/', function (req, res){
  var filename = path.join(__dirname, 'public/views/index.html');
  res.sendFile(filename);
});

//Server listening on port 3300
app.listen(3300);
