import express from 'express';
import bodyParser from 'body-parser';

import router from './router.js';

class Server {

    constructor(config) {
        this.config = config;
        this.app = express();
    }

    bootstrap = () => {
        this.setupRoutes();
        this.initBodyParser();
        return this;
    }

    setupRoutes = () => {
        // const { apiPrefix } = this.config;
        // this.app.use(apiPrefix, router);
        this.app.use('/api', router);
    }

    run = () => {
        const { config: { port, env } } = this;
        this.app.listen(port, (err) => {
            if (err) throw err;
            console.log(`App is running on `, { port }, { env });
        });
        return this;
    }

    initBodyParser = () => {
        const { app } = this;
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
    }
}

export default Server;