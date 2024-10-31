const dotenvSafe = require('dotenv-safe');
const path = require('path');

dotenvSafe.config({
  allowEmptyValues: true,
  path: path.join(__dirname, `../../.env`),
  sample: path.join(__dirname, '../../.env.example'),
});

const config = {
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  dialect: 'postgres',
};

module.exports = {
  development: config,
};
