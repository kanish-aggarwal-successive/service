require('dotenv').config();

const configurations = Object.freeze({
    port: process.env.PORT
});

module.exports = configurations;