# Part 1: installing the database and loading the dataset
Choose whether you want to use SQLite or PostgreSQL. SQLite is often easier to install and get started with for beginners, while PostgreSQL is a more powerful, production-ready database. If you plan on working as a backend developer or similar, you will have to learn to setup a PostgreSQL, MySQL, SQL Server or Oracle database. Setting up PostgreSQL is a good exercise, but if you just want to get started with writing queries and an API fast, it might be better to choose SQLite. 

## Install the database

### SQLite
Download a pre-compiled binary from [the SQLite Download page](https://www.sqlite.org/download.html) and install according to the instructions.


### PostgreSQL
+ Install the PostgreSQL database
+ Install pgAdmin

## Load the dataset

### SQLite
+ Open the `db.sqlite` file using the SQLite database browser

### PostgreSQL
+ Download the [dataset]()
+ Load CSV data files into the database

## Backups
+ Create a backup.
+ Using the SQLite database browser or pgAdmin, delete some rows out of one of your tables
+ Restore the backup.
+ Verify the rows you deleted earlier are back.
