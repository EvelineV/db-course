
const express = require('express');

module.exports = (app, db) => {

  app.post('/Create', function(request, response) {

    console.log("Creating: ", request.body);
    const body = request.body || {};
    const eventParameters = `
        '${body.date || "TBA"}',
        '${body.type || "general"}',
        '${body.name}'
    `;
    if(!body.name) {
       response.status(400).send("DB error: need name to create event.")
    } else {
      db.all(`
        INSERT INTO events (date, type, name)
        VALUES (${eventParameters})`, function dbCallback (err, rows) {
        if(err){
          response.sendStatus(500);
        } else {
          response.status(201).send(`Event created: (${eventParameters})`);
        }
      });
    }
  });

};
