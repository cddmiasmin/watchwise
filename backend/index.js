require('dotenv/config');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./src/routes.js');

const server = express();

server.use(cors({
  origin: 'http://localhost:5173', // ou '*' apenas para desenvolvimento
  credentials: true
}));

server.use(bodyParser.urlencoded ({
    extend: false
}))

server.use(express.json());

server.use(routes);

server.listen(process.env.PORT || 8080, async () => {
    console.log(`The server is running on http://localhost:${process.env.PORT || 8080}`);
});