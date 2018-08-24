const mysql = require('think-model-mysql');

module.exports = {
  handle: mysql,
  database: 'nideshop',
  prefix: 'nideshop_',
  encoding: 'utf8mb4',
  host: '192.168.2.106',
  port: '3306',
  user: 'root',
  password: '123123',
  dateStrings: true
};
