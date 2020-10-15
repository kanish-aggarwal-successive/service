import express from 'express';
import bodyParser from 'body-parser';

import router from './controllers/book/routes.js';

class Server {

    constructor(config) {
        this.config = config;
        this.app = express();
    }

    bootstrap () {
        console.log("2----inside bootstrap")
        this.setupRoutes();
        this.initBodyParser();
        return this;
    }

    setupRoutes () {
        console.log("3--inside setuproutes-----")
            this.app.use('/api', router);
    }

    run () {
        console.log("4----inside run")

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