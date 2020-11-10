import config from './config/configuration.js';
import Server from './Server.js';
import db from './libs/Database.js';
import fs from 'fs';

import Book from './model.js';

// Connect To Database
db().then();

const booksBuffer = fs.readFileSync('src/_seedData/books.json');
const booksJSON = booksBuffer.toString();
const booksData = JSON.parse(booksJSON);

const server = new Server(config);
server.bootstrap();
server.run();

// const importData = async () => {
//     try {
//         await Book.create(booksData);
//         console.log(`Data successfully imported`);
//         // process.exit();
//     } catch (err) {
//         console.log(err);
//     }
// }

// // To import Data
// importData();
