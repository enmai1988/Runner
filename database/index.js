var pg = require('pg');
var http = require('http');
const Promise = require('bluebird');
const createTables = require('./config');
const database = 'runner';

var pool = new pg.Pool()

let db = Promise.promisifyAll(pool);

db.connect()
  .then(client => {
    createTables(client);
  })

module.exports = db;
