// load modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// configure the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// connect to the database
mongoose.connect(dbConfig.url, {
  useNewURLParser: true
}).then(() => {
  console.log("Successfully connected to the database");
}).catch(err => {
  console.log('Could not connect to the database. Existing now...', err);
  process.exit();
});

// root endpoint
app.get('/', (req, res) => {
  res.json({
    "message": "Welcome to yogurtland"
  });
});

require('./app/routes/todo.routes.js')(app);

// run app in browser
app.listen(3300, () => {
  console.log('app listening at port 3300');
});
