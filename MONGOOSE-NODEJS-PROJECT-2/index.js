const mongoose = require('mongoose')

const uri = "mongodb://127.0.0.1/shop";

mongoose.connect(uri)  //Connection with the server

//We need to create a schema.

//Schema means  the document or object we are creating what will be structure and it's validation.

const productsSchema = new mongoose.Schema({
    name : String,
    company:String,
    price:Number,
    colors:[String],
    Image:String,
    category:String,
    isFeatured:Boolean,
})

//We need to create a model.
//With the help of this model we can perform all the queries in the database.

const Product = new mongoose.model('Product',productsSchema) //Connection with the database.

const main = async()=>{
 try{

    const data = await Product.find({price:{$gt:1200}})
    console.log(data)

 }
 catch(err){
    console.log(err)
 }
 finally{
    mongoose.connection.close()
 }
}

main()
