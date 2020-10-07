import mongodb from 'mongodb';

const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://localhost:27017/book-store'

const dbName = 'book-store'

MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log("Unable to connect to database!");
    }

    console.log("Connected successfully")

    const db = client.db(dbName);
});