const Promise = require('bluebird');

module.exports = (db) => {
  if (!db.query) {
    db = Promise.promisifyAll(db);
  }

  // Create users table
  return db.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL NOT NULL PRIMARY KEY,
      username VARCHAR(255),
      name VARCHAR(255),
      rating INTEGER NOT NULL DEFAULT 0,
      picture VARCHAR(255),
      location VARCHAR(255),
      phone VARCHAR(255),
      email VARCHAR(255)
    );`)
    .then(() => {
      db.query("INSERT INTO USERS (username, name, picture, location, phone, email) values ('shindelus', 'jeff', 'null', 'San Francisco', '555-555-5555', 'jeff@gmail.com'), ('pb', 'pablo', 'null', 'San Francisco', '655-555-5555', 'pablo@gmail.com'), ('km', 'kai', 'null', 'San Francisco', '755-555-5555', 'pablo@gmail.com'), ('et', 'enrique', 'null', 'San Francisco', '855-555-5555', 'enrique@gmail.com')");
    })
    .then(() => {
      return db.query("SELECT * from users");
    })
    // .then(result => {
    //   console.log(result.rows[0]);
    // })
    .then(() => {
      // Create runs table
      return db.query(`
        CREATE TABLE IF NOT EXISTS RUNS (
          id SERIAL NOT NULL PRIMARY KEY,
          userId INTEGER references users (id),
          runnerId INTEGER references users (id) DEFAULT 0,
          amount VARCHAR(20),
          location VARCHAR(20),
          status VARCHAR(20),
          title VARCHAR(100),
          description VARCHAR(255)
      );`);
    })
    .then(() => {
      db.query("INSERT INTO RUNS (userid, runnerid, amount, location, status, title, description) values (1, 4, '$20', 'San Francisco', 'available', 'walk my dog', 'I would like you to walk my dog for 30 mins within the next 2 hours.  Key is under my mat'), (3, 1, '$30', 'San Francisco', 'available', 'get groceries', 'I would like you to get my groceries at safeway within the next 3 hours.  I will send you the address and list.'), (4, 2, '$7', 'San Francisco', 'available', 'get me coffee', 'I would like you to get me 3 coffees in the next 30 mins.  I will give you the list and the address.'), (2, 3, '$60', 'San Francisco', 'available', 'mow my lawn', 'I would like you to mow my lawn tomorrow.  it is one acre and I need it done by 2pm.')");
    })
    .then(() => {
      return db.query("SELECT * from runs");
    })
    // .then(result => {
    //   console.log(result.rows[0]);
    // })
    .catch(err => {
      console.log(err);
    });
};




