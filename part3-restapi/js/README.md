## Building a NodeJS/Express API around your database

The file `app.py` contains Python code for the API with two endpoints. You have to implement the other endpoints yourself.

### Installation

You'll need Node/NPM installed. If you don't already have it, [download Node LTS for your system](https://nodejs.org/en/download/). 

### Running the example code

Open consol and cd into `part3-restapi/js/` and install using `npm install` (or `yarn`, if you have). 

You now have the [Node Express server](http://expressjs.com/en/4x/api.html) installed and running. You can run the API with the command `npm start` and see it [in your browser](http://localhost:3001/).

### Manually testing the events list endpoint
The events list endpoint is given as sample code. You can see all the events in the database by running `npm start` and accessing `http://localhost:3001/List` in your browser. You can add a new event using the code in `/routes/Create.js`. Note that this uses a POST request, so instead of using your browser, it is easier to use an API client such as [Insomnia](https://insomnia.rest/) or [Postman](https://www.getpostman.com/) to test this part of the endpoint.

### Unit-testing the events list endpoint

If you want to code the tests in JS, the starter code comes with a test runner called [Mocha](https://mochajs.org/). This test runner will run by opening another console and entering `npm run test`. The unit tests (.js files) need to be located in `/test` to be automatically detected and executed by Mocha. 

To test features of a Rest API, there is a testing utility named [supertest](https://github.com/visionmedia/supertest). It can be imported using `const request = require('supertest');` in your test code.


### Exercises
There will be no specific exercises here. Instead, you will have to use your own judgment to decide what is necessary, and how to make your API most useful and understandable.

Look back at part 2, and build a few API endpoints that can perform the actions in the exercises for you. Try to design the endpoints such that it's easy for the (imaginary) user to understand what URL they are supposed to call and what data they need to provide.

In case the user tries to do something that you don't like (such as inserting two events with the exact same name), return an appropriate error response (such as the status code 400 BAD REQUEST and an explanation of what they did wrong).

Helpful phrases to search on the internet:
+ HTTP methods
+ [HTTP status codes](https://http.cat/)
+ REST API design

t
