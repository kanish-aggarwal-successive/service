import express from 'express';
import bodyParser from 'body-parser';

import router from './controllers/book/routes.js';

class Server {

    constructor(config) {
        this.config = config;
        this.app = express();
    }

    bootstrap () {
        this.initBodyParser();
        this.setupRoutes();
        return this;
    }

    setupRoutes () {
            this.app.use('/api', router);
    }

    run () {
        const { config: { port, env } } = this;
        // Define Routes
        this.app.listen(port, (err) => {
            if (err) throw err;
            console.log(`App is running on port :`, { port });
        });
        return this;
    }

    initBodyParser () {
        const { app } = this;
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
    }
}

export default Server;