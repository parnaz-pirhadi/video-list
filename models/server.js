const express = require("express");
const cors = require("cors");
const path = require("path");


class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT; //read from .env file
    this.paths = {
      allVideos:"/api/videos/",
    };

    this.middlewares();
    this.routes();
  }

  middlewares() {
    const corsOpts = {
      origin: '*',

      methods: [
        'GET',
        'POST',
      ],

      allowedHeaders: [
        'Content-Type',
      ],
    };

    this.app.use(cors(corsOpts));
    this.app.use(express.json());

    // Pick up React index.html filewwsss
    this.app.use(
      express.static(path.join(__dirname, "../client/build"))
    );
  }

  // Bind controllers to routes
  routes() {
    this.app.use(this.paths.allVideos, require("../routes/videos"));

    // Catch all requests that don't match any route
    this.app.get("*", (req, res) => {
      res.sendFile(
        path.join(__dirname, "../client/build/index.html")
      );
    });
    this.app.use(function(req, res, next) {
      // Put some preprocessing here.
      next();
    });

  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server running on port: ", this.port);
    });
  }
}
//node --inspect-brk models/server.js

module.exports = Server;
