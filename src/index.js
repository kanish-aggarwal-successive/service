import config from './config/configuration.js';
import Server from './Server.js';
import db from './libs/Database.js';
import fs from 'fs';

import Book from './model.js';

// import express from 'express';
// const app = express();

// Connect To Database
db().then();

const booksBuffer = fs.readFileSync('src/_seedData/books.json');
const booksJSON = booksBuffer.toString();
const booksData = JSON.parse(booksJSON);

const server = new Server(config);
server.bootstrap();
server.run();

const importData = async () => {
    try {
        await Book.create(booksData);
        console.log(`Data successfully imported`);
        // process.exit();
    } catch (err) {
        console.log(err);
    }
}

// app.put('/getBook/:id', async (req, res) => {
//     try {
//         const book = await Book.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
//         if (!book) {
//             return res.status(404).send();
//         }
//         res.send(book);
//     } catch(e) {
//         res.status(400).send(e)
//     }
// });

// To import Data
importData();
