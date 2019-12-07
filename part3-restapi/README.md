# Part 3: building a ReST API

A web API is often used to allow people to use a website to interact with the database. There is example code for Python+Flask and for JavaScript+NodeJS which you can use to get started.

### Exercises
There will be no specific exercises here. Instead, you will have to use your own judgment to decide what is necessary, and how to make your API most useful and understandable.

Look back at part 2, and build a few API endpoints that can perform the actions in the exercises for you. Try to design the endpoints such that it's easy for the (imaginary) user to understand what URL they are supposed to call and what data they need to provide.

In case the user tries to do something that you don't like (such as inserting two events with the exact same name), return an appropriate error response (such as the status code 400 BAD REQUEST and an explanation of what they did wrong).

Helpful phrases to search on the internet:
+ HTTP methods
+ [HTTP status codes](https://http.cat/)
+ REST API design
