const express = require('express');
const db = require('./models');
const app = express();


db.sequelize.sync().then(() => {
  app.listen(3000, 'localhost', () => {
    console.log(">Listening on PORT for requests");
  })
})
