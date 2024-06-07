### Connect MongoDB with NodeJS

- CREATE A FILE db.js IN THE ROOT FOLDER

- Import Mongoose and Define the MongoDB URL: The db.js file you've created is essentially responsible for establishing a
connection between your Node.js application and your MongoDB database
using the Mongoose library and define the URL to your MongoDB database. This URL typically follows the format .

- Set Up the MongoDB Connection: Next, you call mongoose.connect() to establish a connection to the MongoDB database using the URL and some configuration options (useNewUrlParser, useUnifiedTopology, etc.). This step initializes the connection process but does not actually connect at this point.

- Access the Default Connection Object: Mongoose maintains a default connection object representing the MongoDB connection. You retrieve this object using mongoose.connection, and you've stored it in the variable db. This object is what you'll use to handle events and interact with the database.

- Define Event Listeners: You define event listeners for the database connection using methods like .on('connected', ...), .on('error', ...), and .on('disconnected', ...). These event listeners allow you to react to different states of the database connection.

- Start Listening for Events: The code is set up to listen for events. When you call mongoose.connect(), Mongoose starts the connection process. If the connection is successful, the 'connected' event is triggered, and you log a message indicating that you're connected to MongoDB. If there's an error during the connection process, the 'error' event is triggered, and you log an error message. Similarly, the 'disconnected' event can be useful for handling situations where the connection is lost.

- Export the Database Connection: Finally, you export the db object, which represents the MongoDB connection, so that you can import and use it in other parts of your Node.js application.


`To sum it up, the db.js file acts as a central module that manages the connection to your MongoDB database using Mongoose. It sets up the connection, handles connection events, and exports the connection object so that your Express.js server (or other parts of your application) can use it to interact with the database. When your server runs, it typically requires or imports this db.js file to establish the database connection before handling HTTP requests.`


