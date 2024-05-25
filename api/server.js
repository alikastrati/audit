const express = require('express');
const db = require('./models');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');







// Parse JSON Requests
app.use(express.json());

// Parse Cookies
app.use(cookieParser());


// Whitelist API
app.use(cors());

// Routers
const blogRouter = require('./routes/Blog');
app.use("/blog", blogRouter);


// User Routers
const userRouter = require('./routes/User');
app.use("/auth", userRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, 'localhost', () => {
    console.log(">Listening on PORT for requests");
  })
})
