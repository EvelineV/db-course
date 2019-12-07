// server.js
// where your node app starts

// init project
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()) // for parsing application/json


// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// init sqlite db
var fs = require('fs');
var dbFile = '../../db.sqlite';
var exists = fs.existsSync(dbFile);
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(dbFile);

// if ../../sqlite.db does not exist, create it, otherwise print records to console
db.serialize(function(){
  if (!exists) {
    db.run('CREATE TABLE events (id INTEGER, date TEXT, type TEXT, name TEXT)');
    console.log('New table "events" created!');
  }
  else {
    console.log('Database ready to go!');
  }
});

const deleteTestData = () => {
  console.log("Deleting: ", { date: "test", type:"test", name:"test"})
  db.all("DELETE FROM events WHERE name='test'");
};

// REST API endpoints
require("./routes/List")(app,db);
require("./routes/Create")(app,db);

// TODO: read the sqlite3 module docs and try to add your own! https://www.npmjs.com/package/sqlite3


// if you need a front-end, you can use the following
// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3001, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

module.exports =  { app, deleteTestData };
