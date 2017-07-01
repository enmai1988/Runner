var pg = require('pg');
var http = require('http');
const Promise = require('bluebird');
const createTables = require('./config');

var pool = new pg.Pool()

let db = Promise.promisifyAll(pool);

db.connect()
  .then(client => {
    createTables(client)
      .then(() => client.release())
  })
  .then(() => console.log('all done'))

console.log('in db/index.js')

module.exports = db;
