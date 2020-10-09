import dotenv from 'dotenv';

dotenv.config();

const configurations = Object.freeze({
    port: process.env.PORT
});

export default configurations;