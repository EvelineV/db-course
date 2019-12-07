
const express = require('express');

module.exports = (app, db) => {
  app.get('/List', function(request, response) {
    db.all('SELECT * FROM events', function(err, rows) {
      response.send(rows);
    });
  });

};
