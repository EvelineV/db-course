## Building a Python API around your database

The file `app.py` contains Python code for the API with two endpoints. You have to implement the other endpoints yourself.

### Running the example code
Use a virtual environment with Python 3:
```
virtualenv venv --python=python3
source venv/bin/activate
pip install -r requirements.txt
```

You now have the [Flask API framework](http://flask.palletsprojects.com/en/1.1.x/) installed. You can run the API with the command `flask run` and see it [in your browser](http://127.0.0.1:5000/).

### Testing the events list endpoint
The events list endpoint is given as sample code. You can see all the events in the database by running `flask run` and accessing `http://127.0.0.1/events` in your browser. You can add a new event using the code in `make_new_event.py`. Note that this uses a POST request, so instead of using your browser, it is easier to use the [Python requests module](https://requests.readthedocs.io/en/master/), or an API client such as [Insomnia](https://insomnia.rest/) to test this part of the endpoint.

### Exercises
There will be no specific exercises here. Instead, you will have to use your own judgment to decide what is necessary, and how to make your API most useful and understandable.

Look back at part 2, and build a few API endpoints that can perform the actions in the exercises for you. Try to design the endpoints such that it's easy for the (imaginary) user to understand what URL they are supposed to call and what data they need to provide.

In case the user tries to do something that you don't like (such as inserting two events with the exact same name), return an appropriate error response (such as the status code 400 BAD REQUEST and an explanation of what they did wrong).

Helpful phrases to search on the internet:
+ HTTP methods
+ [HTTP status codes](https://http.cat/)
+ REST API design
