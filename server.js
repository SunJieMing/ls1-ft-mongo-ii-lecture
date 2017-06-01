const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pets');

const app = express();

app.use(bodyParser.json());

require('./controllers')(app);

app.listen(8080, () => {
  console.log('server listening on port 8080');
});
