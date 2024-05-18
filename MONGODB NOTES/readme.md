## MONGODB ALL PRACTICE CODE 



### BASICS COMMAND TO START MONGODB

- `mongosh :`  To Start Mongo-Shell

- `show dbs :` To View All Data-Bases

- `use shop:` Creating Shop Data-Base

- `show collections :` To see all the collections inside shop data-base

- `db.createCollection('<collection-name>’) : ` To Create Collections

- `db.<collection-name>.drop():` To Delete Collections

- `db.dropDatabase():` To Drop Data-Base



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



### COMPARISON OPERATORS USED IN MONGODB

- `$eq` - equalto

- `$ne` - notequalto

- `$gt` - greaterthan

- `$gte` - greaterthaneualto

- `$lt` - lessthan

- `$lte` - lessthanequalto

- `$in` - inoperator

- `$nin` - notinoperator


### DESCRIPTION

- `$eq` : equal-to

Example: db.products.find({'price':{$eg:699} })

Output:  [
  {
    _id: ObjectId('64c23601e32f4a51b19b9262'),
    name: 'Smartphone Model X',
    company: '64c23350e32f4a51b19b9230',
    price: 699,
    colors: [ '#000000', '#ffffff', '#ff0000' ],
    image: '/images/product-smartphone.png',
    category: '64c2342de32f4a51b19b924e',
    isFeatured: false
  },
  {
    _id: ObjectId('64c236a2e32f4a51b19b9280'),
    name: 'Elegant Dining Table',
    company: '64c23350e32f4a51b19b9239',
    price: 699,
    colors: [ '#ffffff', '#ffcc00', '#cc9900' ],
    image: '/images/product-dining-table.png',
    category: '64c2342de32f4a51b19b925a',
    isFeatured: true
  },
 
]

- `$ne:` not-equal-tp

Example : db.products.find({'price':{$ne:99} })

Output : [
  {
    _id: ObjectId('64c23601e32f4a51b19b9262'),
    name: 'Smartphone Model X',
    company: '64c23350e32f4a51b19b9230',
    price: 699,
    colors: [ '#000000', '#ffffff', '#ff0000' ],
    image: '/images/product-smartphone.png',
    category: '64c2342de32f4a51b19b924e',
    isFeatured: false
  },
  {
    _id: ObjectId('64c23601e32f4a51b19b9263'),
    name: 'Laptop Pro',
    company: '64c23350e32f4a51b19b9231',
    price: 1299,
    colors: [ '#333333', '#cccccc', '#00ff00' ],
    image: '/images/product-laptop.png',
    category: '64c2342de32f4a51b19b924e',
    isFeatured: true
  },
]


- $gt` : greater-than

Example : db.products.find({'price':{$gt:999} })

Output : [
  {
    _id: ObjectId('64c23601e32f4a51b19b9263'),
    name: 'Laptop Pro',
    company: '64c23350e32f4a51b19b9231',
    price: 1299,
    colors: [ '#333333', '#cccccc', '#00ff00' ],
    image: '/images/product-laptop.png',
    category: '64c2342de32f4a51b19b924e',
    isFeatured: true
  },
  {
    _id: ObjectId('64c236a2e32f4a51b19b9281'),
    name: 'Diamond Ring',
    company: '64c23350e32f4a51b19b923a',
    price: 1999,
    colors: [ '#000000', '#cc6600', '#663300' ],
    image: '/images/product-diamond-ring.png',
    category: '64c2342de32f4a51b19b9259',
    isFeatured: false
  },
  {
    _id: ObjectId('64c236a2e32f4a51b19b9282'),
    name: 'Outdoor Patio Set',
    company: '64c23350e32f4a51b19b923b',
    price: 1199,
    colors: [ '#333333', '#ff9900', '#660000' ],
    image: '/images/product-outdoor-patio.png',
    category: '64c2342de32f4a51b19b925a',
    isFeatured: true
  }
]

- `$gte :` greater-than-equal-to

Example : db.products.find({'price':{$gte:1999} })

Output : [
  {
    _id: ObjectId('64c236a2e32f4a51b19b9281'),
    name: 'Diamond Ring',
    company: '64c23350e32f4a51b19b923a',
    price: 1999,
    colors: [ '#000000', '#cc6600', '#663300' ],
    image: '/images/product-diamond-ring.png',
    category: '64c2342de32f4a51b19b9259',
    isFeatured: false
  },
  {
    _id: ObjectId('64c23707e32f4a51b19b9296'),
    name: 'Diamond Ring',
    company: '64c23350e32f4a51b19b923a',
    price: 1999,
    colors: [ '#000000', '#cc6600', '#663300' ],
    image: '/images/product-diamond-ring.png',
    category: '64c2342de32f4a51b19b9259',
    isFeatured: false
  }
]

- `$lt:` less-than

Example :  db.products.find({'price':{$lt:2} })

Output: [
  {
    _id: ObjectId('64c23e543e180eb8a268302f'),
    name: 'Small Fresh Ball',
    company: ObjectId('64c23350e32f4a51b19b924c'),
    price: 1,
    colors: [ '#176e6d' ],
    image: '/images/product-Oriental.png',
    category: ObjectId('64c2342de32f4a51b19b9252'),
    isFeatured: false,
    __v: 0
  },
  {
    _id: ObjectId('64c23edf9dc1fb2f856019ba'),
    name: 'Tasty Cotton Shoes',
    company: ObjectId('64c23350e32f4a51b19b924b'),
    price: 1,
    colors: [ '#7d4625' ],
    image: '/images/product-Luxurious.png',
    category: ObjectId('64c2342de32f4a51b19b925e'),
    isFeatured: false,
    __v: 0
  }
]

- `$lte:` less-than-eual-to

Example : db.products.find({'price':{$lte:9} })

Output : [
  {
    _id: ObjectId('64c23e543e180eb8a2683025'),
    name: 'Tasty Concrete Computer',
    company: ObjectId('64c23350e32f4a51b19b9249'),
    price: 9,
    colors: [ '#243172' ],
    image: '/images/product-Licensed.png',
    category: ObjectId('64c2342de32f4a51b19b9258'),
    isFeatured: false,
    __v: 0
  },
  {
    _id: ObjectId('64c23e543e180eb8a268300e'),
    name: 'Recycled Plastic Bacon',
    company: ObjectId('64c23350e32f4a51b19b9240'),
    price: 6,
    colors: [ '#746c54' ],
    image: '/images/product-Sleek.png',
    category: ObjectId('64c2342de32f4a51b19b924e'),
    isFeatured: false,
    __v: 0
  }
]

- `$in:` in-operator

Example :  db.products.find({'price': {$in: [699,129,39]}})

`It will show the price only-in 699,129,29`

Output :

[
  {
    _id: ObjectId('64c23601e32f4a51b19b9262'),
    name: 'Smartphone Model X',
    company: '64c23350e32f4a51b19b9230',
    price: 699,
    colors: [ '#000000', '#ffffff', '#ff0000' ],
    image: '/images/product-smartphone.png',
    category: '64c2342de32f4a51b19b924e',
    isFeatured: false
  },
  {
    _id: ObjectId('64c23601e32f4a51b19b9266'),
    name: 'Fashionable Sunglasses',
    company: '64c23350e32f4a51b19b9234',
    price: 129,
    colors: [ '#000000', '#666666', '#ffcc00' ],
    image: '/images/product-sunglasses.png',
    category: '64c2342de32f4a51b19b9250',
    isFeatured: false
  },
  {
    _id: ObjectId('64c2363be32f4a51b19b9271'),
    name: 'Pet Grooming Kit',
    company: '64c23350e32f4a51b19b923e',
    price: 39,
    colors: [ '#ffffff', '#ffcc00', '#99cc00' ],
    image: '/images/product-pet-grooming.png',
    category: '64c2342de32f4a51b19b9257',
    isFeatured: false
  }
]

- `$nin:` not-in-operator

Example : db.products.find({'price': {$nin: [699,129,39]}})

`It will show the excluding : 699,12,39`

Output:

[
  {
    _id: ObjectId('64c23601e32f4a51b19b9263'),
    name: 'Laptop Pro',
    company: '64c23350e32f4a51b19b9231',
    price: 1299,
    colors: [ '#333333', '#cccccc', '#00ff00' ],
    image: '/images/product-laptop.png',
    category: '64c2342de32f4a51b19b924e',
    isFeatured: true
  },
  {
    _id: ObjectId('64c23601e32f4a51b19b9264'),
    name: 'Smart Watch',
    company: '64c23350e32f4a51b19b9232',
    price: 249,
    colors: [ '#000000', '#ff0000', '#00ff00' ],
    image: '/images/product-smartwatch.png',
    category: '64c2342de32f4a51b19b924e',
    isFeatured: false
  },
  {
    _id: ObjectId('64c23601e32f4a51b19b9265'),
    name: 'Kitchen Blender',
    company: '64c23350e32f4a51b19b9233',
    price: 89,
    colors: [ '#ffffff', '#ff9900', '#990000' ],
    image: '/images/product-blender.png',
    category: '64c2342de32f4a51b19b924f',
    isFeatured: true
  }
]


### CURSOR IN MONGODB

`CURSOR-METHODS :`

1. `count()`

1. `limit()`

1. `skip()`

1. `sort()`

### DESCRIPTION :


- `count() :` To see the number of count inside the data

 Example:


`db.products.find({'price':{$gt:259}}).count()`- It displays the number of price fiels avilabe which are greater the 259 


Output: `7570`

- `limit() :` To set the limits in viewing the data

Example:

`db.products.find({'price':{$gt:259}}).limit(1):` - It limits the data to 1

Output :

`[
  {
    _id: ObjectId('64c23601e32f4a51b19b9262'),
    name: 'Smartphone Model X',
    company: '64c23350e32f4a51b19b9230',
    price: 699,
    colors: [ '#000000', '#ffffff', '#ff0000' ],
    image: '/images/product-smartphone.png',
    category: '64c2342de32f4a51b19b924e',
    isFeatured: false
  }
]`

- `skip()`: Along with the limit it also skips the data

Example :

`db.products.find({'price':{$gt:259}}).limit(2).skip(1)`

Output:

`[
  {
    _id: ObjectId('64c23601e32f4a51b19b9263'),
    name: 'Laptop Pro',
    company: '64c23350e32f4a51b19b9231',
    price: 1299,
    colors: [ '#333333', '#cccccc', '#00ff00' ],
    image: '/images/product-laptop.png',
    category: '64c2342de32f4a51b19b924e',
    isFeatured: true
  },
  {
    _id: ObjectId('64c23601e32f4a51b19b9268'),
    name: 'Outdoor Camping Tent',
    company: '64c23350e32f4a51b19b9236',
    price: 299,
    colors: [ '#333333', '#99cc00', '#ffcc00' ],
    image: '/images/product-tent.png',
    category: '64c2342de32f4a51b19b9252',
    isFeatured: false
  }
]`

- `sort() :` It sort the data according to ascending and descending order

Command Example: `db.products.find({ price: { $gt: 1250 } }'.limit(3).sort({ price: 1 }));

(1) for ascending and (-1) for descending`

For ascending order :

Example : `db.products.find({'price' : {$gt:1250}}).limit(3).sort({'price':1})`

Output : It is in ascending order

`[
  {
    _id: ObjectId('64c23601e32f4a51b19b9263'),
    name: 'Laptop Pro',
    company: '64c23350e32f4a51b19b9231',
    price: 1299,
    colors: [ '#333333', '#cccccc', '#00ff00' ],
    image: '/images/product-laptop.png',
    category: '64c2342de32f4a51b19b924e',
    isFeatured: true
  },
  {
    _id: ObjectId('64c236a2e32f4a51b19b9281'),
    name: 'Diamond Ring',
    company: '64c23350e32f4a51b19b923a',
    price: 1999,
    colors: [ '#000000', '#cc6600', '#663300' ],
    image: '/images/product-diamond-ring.png',
    category: '64c2342de32f4a51b19b9259',
    isFeatured: false
  },
  {
    _id: ObjectId('64c23707e32f4a51b19b9296'),
    name: 'Diamond Ring',
    company: '64c23350e32f4a51b19b923a',
    price: 1999,
    colors: [ '#000000', '#cc6600', '#663300' ],
    image: '/images/product-diamond-ring.png',
    category: '64c2342de32f4a51b19b9259',
    isFeatured: false
  }
]`

For Descending Order:

Example : ` db.products.find({'price': {$gt:1250}}).limit(3).sort({'price':-1})` 

Output : It is in descending order


`[
  {
    _id: ObjectId('64c23707e32f4a51b19b9296'),
    name: 'Diamond Ring',
    company: '64c23350e32f4a51b19b923a',
    price: 1999,
    colors: [ '#000000', '#cc6600', '#663300' ],
    image: '/images/product-diamond-ring.png',
    category: '64c2342de32f4a51b19b9259',
    isFeatured: false
  },
  {
    _id: ObjectId('64c236a2e32f4a51b19b9281'),
    name: 'Diamond Ring',
    company: '64c23350e32f4a51b19b923a',
    price: 1999,
    colors: [ '#000000', '#cc6600', '#663300' ],
    image: '/images/product-diamond-ring.png',
    category: '64c2342de32f4a51b19b9259',
    isFeatured: false
  },
  {
    _id: ObjectId('64c23601e32f4a51b19b9263'),
    name: 'Laptop Pro',
    company: '64c23350e32f4a51b19b9231',
    price: 1299,
    colors: [ '#333333', '#cccccc', '#00ff00' ],
    image: '/images/product-laptop.png',
    category: '64c2342de32f4a51b19b924e',
    isFeatured: true
  }
]`

### LOGICAL OPERATORS IN MONGODB

- `$and`

- `$or`

- `$nor`

- `$not`

### DESCRIPTION

-  `$and :`  Performs a Logical AND Operation on an array of expressions, where all expressions must be true for the document to match


`Command` : { $and: [ { condition1 }, { condition2 }, ... ]}

`Example` : Find Products with price greater than 100 and name equal to 'Diamond Ring'

 ` db.products.find({$and:[{'price':{$gt:100}},{'name':'Diamond Ring'}]})`

 Output :

 `[
  {
    _id: ObjectId('64c236a2e32f4a51b19b9281'),
    name: 'Diamond Ring',
    company: '64c23350e32f4a51b19b923a',
    price: 1999,
    colors: [ '#000000', '#cc6600', '#663300' ],
    image: '/images/product-diamond-ring.png',
    category: '64c2342de32f4a51b19b9259',
    isFeatured: false
  },
  {
    _id: ObjectId('64c23707e32f4a51b19b9296'),
    name: 'Diamond Ring',
    company: '64c23350e32f4a51b19b923a',
    price: 1999,
    colors: [ '#000000', '#cc6600', '#663300' ],
    image: '/images/product-diamond-ring.png',
    category: '64c2342de32f4a51b19b9259',
    isFeatured: false
  }
]`


-  `$or :` Performs a Logical OR operation on an array of expressions,  where at lest one expression must be true for the document to match

`Command` : { $or: [ { condition1 }, { condition2 }, ... ]}

`Example` : Find Products with price greater than 7000 and name equal to 'Diamond Ring'


` db.products.find({$or:[{'price':{$gt:7000}},{'name':'Diamond Ring'}]})`

Output :

`[
  {
    _id: ObjectId('64c236a2e32f4a51b19b9281'),
    name: 'Diamond Ring',
    company: '64c23350e32f4a51b19b923a',
    price: 1999,
    colors: [ '#000000', '#cc6600', '#663300' ],
    image: '/images/product-diamond-ring.png',
    category: '64c2342de32f4a51b19b9259',
    isFeatured: false
  },
  {
    _id: ObjectId('64c23707e32f4a51b19b9296'),
    name: 'Diamond Ring',
    company: '64c23350e32f4a51b19b923a',
    price: 1999,
    colors: [ '#000000', '#cc6600', '#663300' ],
    image: '/images/product-diamond-ring.png',
    category: '64c2342de32f4a51b19b9259',
    isFeatured: false
  }
]`


- `nor:` Performs a Logical NOR operation on an array of expressions , where none of the expressions must be true for the document to match.

`Command` : { $nor: [ { condition1 }, { condition2 }, ... ]}

`Example` : Find Products with price not equal to 20 and name equal to 'Notebook Collection '

`db.products.find({$nor:[{'price':{$gt:20}},{'name':'Notebook Collection'}]})`

Output :

`shop> db.products.find({$nor:[{'price':{$gt:20}},{'name':'Notebook Collection'}]})
[
  {
    _id: ObjectId('64c23601e32f4a51b19b9270'),
    name: 'Healthy Snack Pack',
    company: '64c23350e32f4a51b19b923e',
    price: 19,
    colors: [ '#ffffff', '#ffcc00', '#99cc00' ],
    image: '/images/product-snack-pack.png',
    category: '64c2342de32f4a51b19b9256',
    isFeatured: true
  },
  {
    _id: ObjectId('64c236a2e32f4a51b19b9285'),
    name: 'Healthy Snack Pack',
    company: '64c23350e32f4a51b19b923e',
    price: 19,
    colors: [ '#ffffff', '#ffcc00', '#99cc00' ],
    image: '/images/product-snack-pack.png',
    category: '64c2342de32f4a51b19b9256',
    isFeatured: true
  }
]`

- `$not:` Performs a Logical NOT Operation on the specified expression, inverting the result

`Command` : { field: { $not: { operator: value } } }

`Example` : Find Products with price not equal to 100

`db.products.find({'price': {$ne:100}})`

Output :

`[
  {
    _id: ObjectId('64c23601e32f4a51b19b9262'),
    name: 'Smartphone Model X',
    company: '64c23350e32f4a51b19b9230',
    price: 699,
    colors: [ '#000000', '#ffffff', '#ff0000' ],
    image: '/images/product-smartphone.png',
    category: '64c2342de32f4a51b19b924e',
    isFeatured: false
  },
  {
    _id: ObjectId('64c23601e32f4a51b19b9263'),
    name: 'Laptop Pro',
    company: '64c23350e32f4a51b19b9231',
    price: 1299,
    colors: [ '#333333', '#cccccc', '#00ff00' ],
    image: '/images/product-laptop.png',
    category: '64c2342de32f4a51b19b924e',
    isFeatured: true
  }
]`

