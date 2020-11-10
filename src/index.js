import config from './config/configuration.js';
import Server from './Server.js';
import connectDatabase from './libs/Database.js';
import {importData} from './libs/seedData.js';

// Connect To Database
connectDatabase();

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
