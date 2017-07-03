var pg = require('pg');
const pgp = require('pg-promise')();
var http = require('http');
const Promise = require('bluebird');
const createTables = require('./config');

connection = {
    host: 'localhost',
    port: 5432,
    database: 'runner',
    user: 'runner',
    password: 'runner'
}

const db = pgp(process.env.DATABASE_URL || connection);

db.connect()
  .then(() => {
    createTables(db);
  })
  .then(() => console.log('all done'))

console.log('in db/index.js')

module.exports = db;
