import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './src/routes.js';

const server = express();

server.use(bodyParser.urlencoded ({
    extend: false
}))

server.use(express.json());

server.use('/api', routes);

server.listen(process.env.PORT || 8080, () => {
    console.log(`The server is running on http://localhost:${process.env.PORT || 8080}`);
});