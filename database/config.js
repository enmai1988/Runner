const Promise = require('bluebird');

console.log('in db/config.js');

module.exports = (db) => {
  if (!db.query) {
    db = Promise.promisifyAll(db);
  }

  // Create users table
  return db.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL NOT NULL PRIMARY KEY,
      fbId VARCHAR(255),
      firstName VARCHAR(255),
      lastName VARCHAR(255),
      displayName VARCHAR(255),
      gender VARCHAR(255),
      rating INTEGER NOT NULL DEFAULT 0,
      profilePic VARCHAR(255),
      profileUrl VARCHAR(255),
      location VARCHAR(255),
      phone VARCHAR(255),
      email VARCHAR(255)
    );`)
    .then(() => {
      db.query("INSERT INTO USERS (fbId, firstName, lastName, displayName, gender, profilePic, profileUrl, location, phone, email) values ('shindelus', 'jeff', 'shindelus', 'shindelus', 'male', 'null', 'null', 'San Francisco', '555-555-5555', 'jeff@gmail.com'), ('pb', 'pablo', 'bosermam', 'pb', 'male', 'null', 'null', 'San Francisco', '655-555-5555', 'pablo@gmail.com'), ('km', 'kai', 'mashima', 'km', 'male', 'null', 'null', 'San Francisco', '755-555-5555', 'pablo@gmail.com'), ('eh', 'enrique', 'hernandez', 'eh', 'male', 'null', 'null', 'San Francisco', '855-555-5555', 'enrique@gmail.com')");
    })
    // .then(() => {
    //   return db.query("SELECT * from users");
    // })
    // .then(result => {
    //   console.log(result.rows[0]);
    // })
    .then(() => {
      // Create runs table
      return db.query(`
        CREATE TABLE IF NOT EXISTS RUNS (
          id SERIAL NOT NULL PRIMARY KEY,
          userId INTEGER references users (id),
          runnerId INTEGER DEFAULT 0,
          amount VARCHAR(20),
          location VARCHAR(20),
          status VARCHAR(20),
          title VARCHAR(100),
          description VARCHAR(255),
          expectedFinishTime VARCHAR(255),
          startTime VARCHAR(255),
          finishTime VARCHAR(255)
      );`);
    })
    .then(() => {
      db.query("INSERT INTO RUNS (userId, amount, location, status, title, description) values (1, '$20', 'San Francisco', 'started', 'walk my dog', 'I would like you to walk my dog for 30 mins within the next 2 hours.  Key is under my mat'), (3, '$30', 'San Francisco', 'available', 'get groceries', 'I would like you to get my groceries at safeway within the next 3 hours.  I will send you the address and list.'), (4, '$7', 'San Francisco', 'available', 'get me coffee', 'I would like you to get me 3 coffees in the next 30 mins.  I will give you the list and the address.'), (2, '$60', 'San Francisco', 'finished', 'mow my lawn', 'I would like you to mow my lawn tomorrow.  it is one acre and I need it done by 2pm.')");
    })
    // .then(() => {
    //   return db.query("SELECT * from runs");
    // })
    // .then(result => {
    //   console.log(result.rows[0]);
    // })
    .catch(err => {
      console.log('ERROR: ', err);
    });
};




