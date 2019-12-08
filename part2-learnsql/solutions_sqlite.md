# Part 2: Solutions to the exercises
No peeking at the solutions before trying to write the query yourself and discussing with your neighbours!

## Retrieving existing data
1. Using the general structure, make a list of the first and last names of all the organizers. Ignore the other columns in the `organizers` table.
```
SELECT first_name, last_name
FROM organizers
```

1. We can alphabetically order the list from the previous exercise by using the `ORDER BY <column>` clause after the `FROM` clause. Order the list by first name.
```
SELECT first_name, last_name
FROM organizers
ORDER BY first_name
```

1. We can also filter the list using the `WHERE` keyword. Filter the list from the previous exercise to only include organizers who live in Stockholm. Note that the `WHERE` clause goes between the `FROM` clause and the `ORDER BY` clause.
```
SELECT first_name, last_name FROM organizers
WHERE city = 'Stockholm'
ORDER BY first_name
```

### Aggregates
1. Use the `COUNT()` function (this goes inside the `SELECT` clause) to find out how many events are in the database.
```
SELECT COUNT(*) FROM events
```

1. Use the `MAX()` function to find the age of the oldest organizer.
```
SELECT MAX(age) FROM organizers
```

1. Filter the previous query to find the age of the oldest organizer who lives in Uppsala.
```
SELECT MAX(age) FROM organizers
WHERE city = 'Uppsala'
```

1. Use both the `COUNT()` function and the `GROUP BY` clause to find the number of organizers living in each city.
```
SELECT city, count(*) AS num
FROM organizers
GROUP BY city
```

### Joining two or more tables
1. Choose one event in the database and list all visitors for that event.
```
SELECT
events.name AS event,
visitors.name AS name
FROM events
JOIN events_visitors ON events.id = events_visitors.event_id
JOIN visitors ON events_visitors.visitor_id = visitors.id
WHERE events.date = "2019-01-20"
```

1. List the names of all visitors who are older than 40 for today's event.

1. What happens if you leave out the `ON` clause? Explain why this happens (exploding join)


### Subqueries
TO DO

## Inserting new data
1. Someone new signed up to an event! Add them to the database using the `INSERT <column1>, <column2>, ... VALUES (<value1>, <value2>,...) INTO visitors` query. After you're done, use a `SELECT` query to confirm they're there.
```
INSERT INTO visitors(name, requests)
VALUES
('Elizabeth', 'vegetarian');
INSERT INTO events_visitors(event_id, visitor_id)
VALUES
(5, (SELECT id FROM visitors WHERE name = "Elizabeth"));
```

1. Someone new signed up to all future events! To avoid having to write many queries, use a `WHERE` clause on your `INSERT` statement and add them to the visitors list for all future events. After you're done, use a `SELECT` query to confirm that your `INSERT` succeeded.
```
INSERT INTO events_visitors(visitor_id, event_id)
SELECT 4, id FROM events WHERE date >= "2019-03-04";
```

## Updating existing data
1. A visitor has sent you an email about their food allergies. Update their entries in the `visitors` table with an `UPDATE` query so the organizers of those events will know. After you're done, use a `SELECT` query to confirm that their food data is updated.
```
UPDATE visitors SET requests = "lactose free" WHERE name="Eva"
```

## Deleting data
1. Sadly, one of the organizers has fallen ill. Use a `DELETE` statement to delete their attendance row from the database. When you're done, run a query to check that you only deleted them from this one event, not their other events, and also check that you did not delete the event itself.
```
DELETE
FROM events_organizers
WHERE organizer_id = 4
```
