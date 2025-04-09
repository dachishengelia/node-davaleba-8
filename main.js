const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const rejisoriRoutes = require('./routes/rejisoriRoutes');
const movieRoutes = require('./routes/movieRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/rejisorebi', rejisoriRoutes);
app.use('/filmebi', movieRoutes);

mongoose.connect('mongodb://localhost:27017/movieDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.log('ver daukavshirda mongodbs ', error));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
