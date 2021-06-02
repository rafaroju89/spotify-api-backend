require('dotenv').config();

/* Require the class Server to create an instance and use its methos */
const Server = require('./models/server');

/*Instatiation of the server */
const server = new Server();

/*turn on the server */
server.listen();

