// Question 1: Difference Between MongoDB Server & Node.js Server?

//Explain the difference between a MongoDB server and a Node.js server in terms of their roles and functionalities. Provide examples of situations where you would use each server type.

//Solution-1 : The MongoDB server is responsible for storing and managing data in the MongoDB database. It handles data storage, retrieval, and manipulation operations. On the other hand, a Node.js server is a runtime environment that executes JavaScript code. It handles incoming requests from clients, processes them, and can interact with databases like MongoDB to retrieve or update data. You would use a MongoDB server to store and manage data, while a Node.js server is used to handle application logic and serve client requests.

//Question 2: MongoDB Queries ?

//a) Write a MongoDB query to create a new document in a collection named "students" with fields "name," "age," and "grade."

//Step-1 : Creating a Database: `use mystudent`
//Step-2 : Create a collection named students : `db.createCollection("students")`
//Step-3 : MongoDB query : `db.students.insertOne({name:'John',age:'23',grade:'A+'})`
