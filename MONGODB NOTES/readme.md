## MONGODB ALL PRACTICE CODE 

### CREATION AND INSERTION OF DATA INSIDE MONGODB

students> use student
switched to db student

- `For Creating Collections:`
student> db.createCollection('data')
{ ok: 1 }

- `For Inserting One Data:`
student> db.data.insertOne({'name':'Kapil',age:32})
{
  acknowledged: true,
  insertedId: ObjectId('66441110832f83448e46b799')
}

- `For Inserting Many Data `
student> db.data.insertMany([{'name':'Kapil',age:32},{'name':'John',age:44},{'name':'Sachin',age:50}])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('66441286832f83448e46b79a'),
    '1': ObjectId('66441286832f83448e46b79b'),
    '2': ObjectId('66441286832f83448e46b79c')
  }
}


- `For Find All Data:`
 db.data.find()
[
  { _id: ObjectId('66441110832f83448e46b799'), name: 'Kapil', age: 32 },
  { _id: ObjectId('66441286832f83448e46b79a'), name: 'Kapil', age: 32 },
  { _id: ObjectId('66441286832f83448e46b79b'), name: 'John', age: 44 },
  {
    _id: ObjectId('66441286832f83448e46b79c'),
    name: 'Sachin',
    age: 50
  }
]

- `For Inserting One Data:`
student> db.data.insertOne({'name':'Kapil',age:32,'course-name':'ComputerScience'})
{
  acknowledged: true,
  insertedId: ObjectId('6644144f832f83448e46b79d')
}

- `For Finding All Data:`
student> db.data.find()
[
  { _id: ObjectId('66441110832f83448e46b799'), name: 'Kapil', age: 32 },
  { _id: ObjectId('66441286832f83448e46b79a'), name: 'Kapil', age: 32 },
  { _id: ObjectId('66441286832f83448e46b79b'), name: 'John', age: 44 },
  {
    _id: ObjectId('66441286832f83448e46b79c'),
    name: 'Sachin',
    age: 50
  },
  {
    _id: ObjectId('6644144f832f83448e46b79d'),
    name: 'Kapil',
    age: 32,
    'course-name': 'ComputerScience'
  }
]



- `For Finding Data with specific field:`
student> db.data.find({'name':'Kapil'})
[
  { _id: ObjectId('66441110832f83448e46b799'), name: 'Kapil', age: 32 },
  { _id: ObjectId('66441286832f83448e46b79a'), name: 'Kapil', age: 32 },
  {
    _id: ObjectId('6644144f832f83448e46b79d'),
    name: 'Kapil',
    age: 32,
    'course-name': 'ComputerScience'
  }
]


- `For Find One Sing Data with the specific Field:`
student> db.data.findOne({'name':'Kapil'})
{ _id: ObjectId('66441110832f83448e46b799'), name: 'Kapil', age: 32 }



### IMPORTING JSON DATA IN MONGODB

- Command

`mongoimport jsonfile.json –d database_name –c collection_name`

- Example 

mongoimport D:\mongoimport\products.json -d shop -c products

- Output

C:\Users\kapil>mongoimport D:\mongoimport\products.json -d shop -c products
2024-05-16T07:22:02.126+0530    connected to: mongodb://localhost/
2024-05-16T07:22:02.351+0530    10355 document(s) imported successfully. 0 document(s) failed to import.

### IMPORT ARRAY OF OBJECTS OR JSON ARRAY

- Command

`mongoimport products.json -d shop -c products --jsonArray`

- Example

mongoimport D:\mongoimport\sales.json -d shop -c sales --jsonArray

`Here, --jsonArray accepts the import of data expressed with multiple MongoDB documents within a single JSON array.`



- Output

C:\Users\kapil>mongoimport D:\mongoimport\sales.json -d shop -c sales --jsonArray
2024-05-16T07:30:08.202+0530    connected to: mongodb://localhost/
2024-05-16T07:30:08.228+0530    5 document(s) imported successfully. 0 document(s) failed to import.

### EXPORTING JSON DATA IN MONGODB

- Command

`mongoexport –d database_name –c collection_name -o outpfile.json`

- Example 

mongoexport -d shop -c sales -o D:\mongoimport\salestest.json

- Output

C:\Users\kapil>mongoexport -d shop -c sales -o D:\mongoimport\salestest.json
2024-05-16T07:42:49.944+0530    connected to: mongodb://localhost/
2024-05-16T07:42:49.974+0530    exported 5 records