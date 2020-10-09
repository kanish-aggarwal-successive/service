const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://localhost:27017/book-store'

const dbName = 'book-store'

MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log("Unable to connect to database!");
    }

    console.log("Connected successfully")

    const db = client.db(dbName);

    // db.collection('books').find({ author: "Unknown" }).toArray((error, books) => {
    //     console.log(books)
    // });

    db.collection('books').findOne({ id: '050' }, (error, book) => {
        if (error) {
            return console.log("Unable to featch!");
        }

        console.log(book)
    });

    db.collection('books').find({}, (err, book) => {
        if (err) {
            return console.log("Unable to featch!");
        }

        console.log(book.body)
    });


});