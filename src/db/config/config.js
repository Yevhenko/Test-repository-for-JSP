require('dotenv').config();

const config = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PSWD,
    database: process.env.DB_BASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,
    dialect: 'mysql',
    logging: false,
    pool: {
      max: 10,
      min: 0,
      idle: 5000,
      acquire: 5000,
      evict: 5000,
    },
  },
};

module.exports = config;
