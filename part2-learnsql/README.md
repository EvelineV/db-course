# Part 2: using SQL to interact with the data
In this part of the workshop, we will learn to interact with the database using SQL commands. SQL (Structured Query Language) was invented in the 1970s specifically to interact with databases. There exist many dialects of SQL, since every database (SQLite, PostgreSQL, MySQL, SQL Server, Oracle, BigQuery, etc.) provides different features, or has a different philosophy on optimizing queries. However, many features are the same and those are a good basis for any developer who expects to use databases.

Note that a lot of good documentation on databases is already written, and it would be hard to write a workshop that gives a better explanation than all other existing texts. This is why the workshop will give you a lot of pointers, leads and suggestions, but you will almost certainly need to search online (on Stackoverflow or the documentation of SQLite or PostgreSQL) to solve the exercises completely.

## Structure of the database
Databases using SQL consist of one or more tables. Every table has columns and rows (rows are sometimes called records). To retrieve, insert, update or delete a row, we have to write and run a query. For some queries, it is necessary to consider two or more tables simultaneously.

We will be using examples from the dataset that we just loaded in the previous step. As you can see, it consists of a table `events`, a table `visitors`, and a table `organizers`. Questions we can ask ourselves about this dataset include:

+ how many events were organized?
+ which event was the first event of this year?
+ which event had the most participants?
+ how many unique visitors are in the database?
+ which event had the most visitors and the most organizers (added together)
+ which type of event is the most popular?
+ which visitor went to the most events?
+ which two visitors attended the most events together?

and so on. We will write SQL queries to answer these questions, insert new visitors, update the description of an event, and delete a visitor from an event.


## Retrieving existing data
For a query on a single table, the general SQL code looks as follows:
```
SELECT <column1>, <column2>
FROM <table>
```
1. Using the general structure, make a list of the first and last names of all the organizers. Ignore the other columns in the `organizers` table.
1. We can alphabetically order the list from the previous exercise by using the `ORDER BY <column>` clause after the `FROM` clause. Order the list by first name.
1. We can also filter the list using the `WHERE` keyword. Filter the list from the previous exercise to only include organizers who live in Stockholm. Note that the `WHERE` clause goes between the `FROM` clause and the `ORDER BY` clause.

### Aggregates
If we want to find an average, maximum, or minimum, we can use an aggregate function to find out. Aggregate queries usually look like this:
```
SELECT <column1>, <AGGREGATE_FUNCTION>(<column2>)
FROM <table>
GROUP BY <column1>
```
Note you don't need a `GROUP BY` clause for a question where you only return one column.
1. Use the `COUNT()` function (this goes inside the `SELECT` clause) to find out how many events are in the database.
1. Use the `MAX()` function to find the age of the oldest organizer.
1. Filter the previous query to find the age of the oldest organizer who lives in Uppsala.
1. Use both the `COUNT()` function and the `GROUP BY` clause to find the number of organizers living in each city.

### Joining two or more tables
Two tables can be connected using the following syntax:
```
SELECT <a.column1>, <a.column2>, <b.column1>, <b.column2>
FROM <table_a> AS a JOIN <table_b> AS b
ON <a.column1> = <b.column3>
```
Note the `ON` clause is used to find out what the tables have in common.
1. List the names of all visitors for today's event.
1. List the names of all visitors who are older than 40 for today's event.
1. What happens if you leave out the `ON` clause? Explain why this happens (exploding join)
1.

### Subqueries
TO DO

## Inserting new data
1. Someone new signed up to an event! Add them to the database using the `INSERT <column1>, <column2>, ... VALUES (<value1>, <value2>,...) INTO visitors` query. After you're done, use a `SELECT` query to confirm they're there.
1. Someone new signed up to all future events! To avoid having to write many queries, use a `WHERE` clause on your `INSERT` statement and add them to the visitors list for all future events. After you're done, use a `SELECT` query to confirm that your `INSERT` succeeded.

## Updating existing data
1. A visitor has sent you an email about their food allergies. Update their entries in the `visitors` table with an `UPDATE` query so the organizers of those events will know. After you're done, use a `SELECT` query to confirm that their food data is updated.

## Deleting data
1. Sadly, one of the organizers has fallen ill. Use a `DELETE` statement to delete their attendance row from the database. When you're done, run a query to check that you only deleted them from this one event, not their other events, and also check that you did not delete the event itself.
