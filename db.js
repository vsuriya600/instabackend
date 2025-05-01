const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'b64qf5pvsro0kczg6nkb-mysql.services.clever-cloud.com',
  user: 'u5m0wfhyfc9htd9b',
  password: 'AeD52RG6731pHbBVAnmS',
  database: 'b64qf5pvsro0kczg6nkb',
});

db.connect((err) => {
  if (err) {
    console.error('Connection error:', err.stack);
    return;
  }
  console.log('Connected to MySQL database');
});

module.exports = db;
