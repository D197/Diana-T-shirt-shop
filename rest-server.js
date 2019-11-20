//////////
// CONFIG

// Skapa en express-app (vår server)

const express = require('express');

const app = express();

// express behöver body-parser för att läsa in request body (som json)

const bodyParser = require('body-parser');

app.use(bodyParser.json({ limit: '50mb' }));

// porten vi servar på (som i http://localhost:3000 )

const port = 3000;

// Konfigurera databasanslutningen
const mysql = require('mysql');
const db = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'pass',
  database : 'tshirt'
});
// gör om metoderna connect och query till promise-metoder, så vi kan använda async / await
const util = require('util');
db.connect = util.promisify(db.connect);
db.query = util.promisify(db.query);
// Anslut till databasen
db.connect();

///////////////////////////

// REST API

app.get('/api/andras/modeler', async (req, res) => {
  let result = await db.query("SELECT * FROM andras");
  console.log(result);
  res.json(result);
})

// ska fånga alla utstående anrop till /rest som inte matchat någon tabell ovan

app.all('/api/*', async (req, res) => {

  console.log('not found', req.path, req.method);

  res.status(404).end();

});


// serve frontend files (all existing files in the client folder will respond)

app.use(express.static('./client/'));

// also catch all remaining requests

// and send them to our index.html file

// because that is how we get virtual routes in the front-end (and front-end 404's)

// use a little regex for that (not match rest)

app.get('*', async (req, res) => {

  res.sendFile(path.normalize(__dirname + '/client/index.html'));

});


// servern startas

app.listen(port, () => {

  console.log('server running on port ' + port);

})