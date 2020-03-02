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
    'SELECT "Country Name", "2018" as gdp from accounts \
    WHERE "2018" > 0 \
    ORDER BY gdp DESC \
    LIMIT 10 \
    ',
    (error, result) => {
  		if(error) {
        throw error
      }
      console.log(result.rows)
      return res.status(200).json(result.rows)
      // res.send()
  	})
})

// app.get("/countriesgdp" (req, res) => {})

app.get("/country/:id", (req, res) => {
  const country_code = request.params.country_code
  pg.query('SELECT * from accounts WHERE "Country Code" = $1', [country_code], (error, result) => {
    if(error) {
      throw error
    }
    res.status(200).json(result.rows)
  })
}) // id given as country code

app.listen(PORT)
