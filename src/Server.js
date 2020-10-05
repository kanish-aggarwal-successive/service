const express = require('express');
const bodyParser = require('body-parser');

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
        const { app } = this;
        app.get('/health-check', (req, res) => {
            res.send("I am OK");
        });
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
        app.use(bodyParser.urlencoded({ extended: false}));
        app.use(bodyParser.json());
    }
}

export default Server;