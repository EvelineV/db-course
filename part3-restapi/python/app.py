# standard library imports
import json
import sqlite3

# third party imports
from flask import Flask, request, Response
from flask_json import FlaskJSON, json_response


# app definition
app = Flask(__name__)
FlaskJSON(app)

# constants
db_host = '../../db.sqlite'
HTTP_METHOD_GET = 'GET'
HTTP_METHOD_POST = 'POST'

# API endpoints
@app.route('/')
def hello():
    return 'Hello, World!'


@app.route('/events', methods=[HTTP_METHOD_GET, HTTP_METHOD_POST])
def list_events():
    if request.method == HTTP_METHOD_GET:
        with sqlite3.connect(db_host) as connection:
            cursor = connection.cursor()
            cursor.execute("SELECT * FROM events ORDER BY date")
            events = cursor.fetchall()
            return json_response(items=events)

    if request.method == HTTP_METHOD_POST:
        new_event_date = request.json['date']
        new_event_name = request.json['name']
        new_event_type = request.json['type']
        with sqlite3.connect(db_host) as connection:
            cursor = connection.cursor()
            cursor.execute(
                "INSERT INTO events(date, name, type) VALUES (?, ?, ?)",
                (new_event_date, new_event_name, new_event_type)
            )
        return Response(json.dumps({"message": "success"}), status=201, mimetype='application/json')


if __name__ == '__main__':
    app.run()
