### $group :

- The $group stage groups documents by specified fields and performs aggregate operations on grouped data.

- It is like the reduce() method in Java Script.

- When dealing with the $group stage we need to pass $sign for our existing field not the one we are going to create.

Command : `db.products.aggregate([{$group:{_id:"$company",totalProducts:{$sum:1}}}])`

Output: `[
  { _id: ObjectId('64c23350e32f4a51b19b9233'), totalProducts: 320 },
  { _id: '64c23350e32f4a51b19b9254', totalProducts: 1 },
  { _id: '64c23350e32f4a51b19b9250', totalProducts: 2 },
  { _id: ObjectId('64c23350e32f4a51b19b9243'), totalProducts: 351 },
  { _id: ObjectId('64c23350e32f4a51b19b923e'), totalProducts: 381 },
  { _id: ObjectId('64c23350e32f4a51b19b923d'), totalProducts: 337 },
  { _id: '64c23350e32f4a51b19b9252', totalProducts: 2 },
  { _id: '64c23350e32f4a51b19b924b', totalProducts: 2 },
  { _id: '64c23350e32f4a51b19b9256', totalProducts: 1 },
  { _id: '64c23350e32f4a51b19b923f', totalProducts: 5 },
  { _id: '64c23350e32f4a51b19b9245', totalProducts: 2 },
  { _id: ObjectId('64c23350e32f4a51b19b9248'), totalProducts: 374 },
  { _id: ObjectId('64c23350e32f4a51b19b9230'), totalProducts: 319 },
  { _id: '64c23350e32f4a51b19b9249', totalProducts: 2 },
  { _id: '64c23350e32f4a51b19b9231', totalProducts: 6 },
  { _id: '64c23350e32f4a51b19b9253', totalProducts: 1 },
  { _id: ObjectId('64c23350e32f4a51b19b9245'), totalProducts: 313 },
  { _id: ObjectId('64c23350e32f4a51b19b924d'), totalProducts: 342 },
  { _id: '64c23350e32f4a51b19b9233', totalProducts: 6 },
  { _id: ObjectId('64c23350e32f4a51b19b9246'), totalProducts: 305 }
]`

Command : `db.products.aggregate([{$match:{company:"64c23350e32f4a51b19b9252"}}])`

Output : `[
  {
    _id: ObjectId('64c23871e32f4a51b19b92cb'),
    name: 'Dumbbell Set',
    company: '64c23350e32f4a51b19b9252',
    price: 49,
    colors: [ '#333333', '#ff9900', '#00cc99' ],
    image: '/images/product-dumbbell-set.png',
    category: '64c2342de32f4a51b19b925e',
    isFeatured: false
  },
  {
    _id: ObjectId('64c239f1e32f4a51b19b92f7'),
    name: 'Wireless Charging Dock',
    company: '64c23350e32f4a51b19b9252',
    price: 49,
    colors: [ '#000000', '#666666', '#cc9900' ],
    image: '/images/product-charging-dock.png',
    category: '64c2342de32f4a51b19b924e',
    isFeatured: false
  }
]`