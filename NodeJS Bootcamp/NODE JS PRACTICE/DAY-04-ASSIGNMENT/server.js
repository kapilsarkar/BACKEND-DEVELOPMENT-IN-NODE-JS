// Question 1: Difference Between MongoDB Server & Node.js Server?

//Explain the difference between a MongoDB server and a Node.js server in terms of their roles and functionalities. Provide examples of situations where you would use each server type.

//Solution-1 : The MongoDB server is responsible for storing and managing data in the MongoDB database. It handles data storage, retrieval, and manipulation operations. On the other hand, a Node.js server is a runtime environment that executes JavaScript code. It handles incoming requests from clients, processes them, and can interact with databases like MongoDB to retrieve or update data. You would use a MongoDB server to store and manage data, while a Node.js server is used to handle application logic and serve client requests.

//Question 2: MongoDB Queries ?

//a) Write a MongoDB query to create a new document in a collection named "students" with fields "name," "age," and "grade."

//Step-1 : Creating a Database: `use mystudent`
//Step-2 : Create a collection named students : `db.createCollection("students")`
//Step-3 : MongoDB query : `db.students.insertOne({name:'John',age:'23',grade:'A+'})`

//Solution a) `db.students.insertOne({name:'John',age:'23',grade:'A+'})`

//b) Write a MongoDB query to update the "age" field of a document in the "employees" collection with the name "John" to 30.

//Step-1 : Create a collection named employees : `db.createCollection("employees")`
//Step-2 : Insert Data into the Field : `db.employees.insertOne({name:'Kapil',age:33})` and `db.employees.insertOne({name:'john',age:48})`

//Step-3 : Update the  Field : `db.employees.updateOne({'name':'john' },{$set:{age:30}})`

//Solution b) `db.employees.updateOne({'name':'john' },{$set:{age:30}})`

//c) Write a MongoDB query to delete a document from the "products" collection with the name "Product A."

//Step-1: Create a collection named products : ` db.createCollection('products')`
//Step-2 : Insert Data into the field : `db.products.insertOne({name:'Product A',price:999})`

//Step-3 : Delete the document : `db.products.deleteOne({name:'Product A'})`

//Solution c) `db.products.deleteOne({name:'Product A'})`

//d) Write a MongoDB query to retrieve all documents from the "orders" collection where the total amount is greater than $100.

//Step-1 : Create a collection named orders : ` db.createCollection('orders')`
//Step-2 : Insert Data into the field  : `db.orders.updateOne({name:'AppleMobile',{$set:{totalAmount:'$600'}}})`

//Step-3 : retrieve all documents from the "orders" collection where the total amount is greater than $100 :
//`db.orders.find({totalAmount:{$gt:'$100'}})`

//Solution d) `db.orders.find({totalAmount:{$gt:'$100'}})`





