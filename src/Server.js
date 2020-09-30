const express = require('express');

class Server {

    constructor(config) {
        this.config = config;
        this.app = express();
    }

    bootstrap = () => {
        this.setupRoutes();
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
}

module.exports = Server;