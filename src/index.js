const config = require('./config/configuration');
const Server = require('./Server');

const server = new Server(config);
server.bootstrap();
server.run();