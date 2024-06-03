### MONGODB BASICS :

### MONGO-DB VS SQL 

  | SQL    | MONGODB|
  |--------|--------|
  |DATABASE|DATABASE|
  
  |TABLE    |COLLECTION|
  |---------|----------|

  |COLUMN|FIELD|
  |---------|----------|
  |ROW(RECORD)|DOCUMENT|
  

- Stat Mongo-Shell : `mongosh`

- Create DataBase : `use users`

- Create Collection : ` db.createCollection("users")`

- Insert Data Into Data-Base : `db.users.insertOne({id:1,userName:'Kapil',age:33})`

- To View Data : ` db.users.find()`

###  CREATE DATA IN MONGO-DB : 

1. Create DataBase : `use users`

1. Create Collection : ` db.createCollection("users")`

1. Insert Data Into Data-Base : `db.users.insertOne({id:1,userName:'Kapil',age:33})`

1. To View Data : ` db.users.find()`

### READ DATA IN MONGO-DB :

Example : Find data from the users collection  where age is greater than 33

Command: ` db.users.find({age:{$gt:33}})`

Output: `[
  {
    _id: ObjectId('665d576bfcd278b2f246b79a'),
    id: 2,
    userName: 'Sachin',
    age: 50
  },
  {
    _id: ObjectId('665d5783fcd278b2f246b79b'),
    id: 3,
    userName: 'Hrithik',
    age: 52
  }
]`

Example : Find data from the users collection  where age is less than 50

Command : `db.users.find({age:{$lt:50}})`

Output : `[
  {
    _id: ObjectId('665bddbe1a588addbb46b799'),
    id: 1,
    userName: 'Kapil',
    age: 33
  }
]`

### UPDATE DATA IN MONGO-DB :

Example : Update the age to 48 from users collection where name is Hrithick

Command : `db.users.updateOne({userName:'Hrithik'},{$set:{age:48}})`

Output: `{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}`

Update-Data : Command : `db.users.find({userName:'Hrithik'})`

Output: `[
  {
    _id: ObjectId('665d5783fcd278b2f246b79b'),
    id: 3,
    userName: 'Hrithick',
    age: 48
  }
]`

### DELETE DATA IN MONGO-DB :

Example : Delete a data from the collection users where name is Brock

Command : `db.users.deleteOne({userName:'Brock'})`

Output : `{ acknowledged: true, deletedCount: 1 }`

### FOR CONNECTING MONGO-SHELL WITH MONGO-DB-COMPASS LOCALLY

Connection String : `mongodb://127.0.0.1:27017/`








