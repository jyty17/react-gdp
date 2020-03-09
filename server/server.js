var express = require('express');
var http = require('http');
var Pool = require('pg').Pool;
var pg = new Pool({
  user: 'Jerry',
  host: 'localhost',
  database: 'gdp',
  port: 5432
});
var cors = require('cors')

var app = express();
app.use(cors())

const PORT = 3003

app.get("/", (req, res) => res.send('hello'))

app.get("/countries", (req, res) => {
  pg.query(
    'SELECT countryname, "2018" gdp, accounts.countrycode code from accounts \
    RIGHT JOIN countries USING (countryname)\
    WHERE "2018" > 0 \
    ORDER BY gdp DESC \
    ',
    (error, result) => {
      if(error) {
        throw error
      }
      // console.log(result.rows)
      return res.status(200).json(result.rows)
      // res.send()
    })
});

app.get("/country/:id", (req, res) => {
  console.log(req.params);
  const country_code = req.params.id
  pg.query('SELECT * from accounts WHERE countrycode = $1', [country_code], (error, result) => {
    if(error) {
      throw error
    }
    // console.log(result.rows)
    const data = result.rows;
    console.log(data[0]['countryname']);
    const d = Array.from(data[0], ([key, value]) => {
      key,
      value
    });
    // const formatted = Array.from(data,
    //   ([key, value]) => {
    //     key,
    //     value
    //   })
    // console.log(formatted);
    console.log(d);
    res.status(200).json(result.rows)
  })
}); // id given as country code

app.listen(PORT)
