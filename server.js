// load modules
const express = require('express');
const ballsyApp = express();

// run app in browser
ballsyApp.listen(3300, function() {
  console.log('app listening at port 3300');
});

// root endpoint
ballsyApp.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
  // res.send('Hello Woild');
});

// output to console
console.log('May the Schwartz be with you!');
