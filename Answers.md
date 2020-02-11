 [ ] Explain the difference between `Relational Databases` and `SQL`.
 SQL is structured Query Language, it is how we communicate with the database
 and join tables, and extract data. The Database itself is a lot of tables that hold
 data, and SQL is used to find or add data.

- [ ] Why do tables need a `primary key`?
So that when other tables need to be joined, they will have something to connect them with a foreign key on another table.

- [ ] What is the name given to a table column that references the primary key on another table.
A foreign key.

- [ ] What do we need in order to have a _many to many_ relationship between two tables.
A third bridge table, that can connect 2 tables with foreign keys. In this project
my table called project_resource is an example of a bridge table, it also has the coresponing seed.

