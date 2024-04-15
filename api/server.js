const express = require('express');
const db = require('./models');
const app = express();
const cors = require('cors');



app.use(express.json());

// Whitelist API
app.use(cors());

// Routers
const blogRouter = require('./routes/Blog');
app.use("/blog", blogRouter);


db.sequelize.sync().then(() => {
  app.listen(3001, 'localhost', () => {
    console.log(">Listening on PORT for requests");
  })
})
