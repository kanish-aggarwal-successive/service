import config from './config/configuration.js';
import Server from './Server.js';
import connectDatabase from './libs/Database.js';
import {importData} from './libs/seedData.js';

// Connect To Database
connectDatabase();

const server = new Server(config);
server.bootstrap();
server.run();

// To import Data
importData();
