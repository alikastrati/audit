require('dotenv').config({ path: './sec.env' });

const fs = require('fs');


const config = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql'
  },
  test: {
    username: process.env.DB_USER_TEST,
    password: process.env.DB_PASSWORD_TEST,
    database: process.env.DB_DATABASE_TEST,
    host: process.env.DB_HOST_TEST,
    dialect: 'mysql'
  },
  production: {
    username: process.env.DB_USER_PRODUCTION,
    password: process.env.DB_PASSWORD_PRODUCTION,
    database: process.env.DB_DATABASE_PRODUCTION,
    host: process.env.DB_HOST_PRODUCTION,
    dialect: 'mysql'
  }
};

fs.writeFileSync('config.json', JSON.stringify(config, null, 2));
