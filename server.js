const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

// MySQL database connection
const db = mysql.createConnection({
  host: 'b64qf5pvsro0kczg6nkb-mysql.services.clever-cloud.com',
  user: 'u5m0wfhyfc9htd9b',
  password: 'AeD52RG6731pHbBVAnmS',
  database: 'b64qf5pvsro0kczg6nkb'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Store user info (username & password)
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
  db.query(sql, [username, password], (err, result) => {
    if (err) {
      console.error('MySQL error:', err);
      return res.status(500).send('Database error');
    }
    res.status(200).send('User stored successfully');
  });
});

// Get all user details
app.get('/api/users', (req, res) => {
  const sql = 'SELECT * FROM users';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('MySQL error:', err);
      return res.status(500).send('Database error');
    }
    res.status(200).json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
