require('dotenv').config(); // that loads environment variables from a .env file into process.env
const Server = require('./models/server');
const server = new Server();

server.listen();
