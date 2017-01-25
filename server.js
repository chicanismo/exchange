const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://migs:cook@ds141118.mlab.com:41118/miggy');

app.use('/', express.static(path.join(__dirname, '/public')));

const port = process.env.PORT || '3000';

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});
