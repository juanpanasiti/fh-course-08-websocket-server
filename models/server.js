const express = require('express');
const cors = require('cors');
const socketController = require('../sockets/controllers');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);

        this.path = {};

        // Middleweares
        this.middlewares();

        // Body read and parse
        this.app.use(express.json());

        // Routes
        this.routes();

        // Sockets
        this.sockets();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.static('public'));
    }

    // Methods
    routes() {
        // this.app.use(this.authPath, require('../routes/auth.routes'));
    }

    // Sockets
    sockets() {
        this.io.on('connection', socketController);
    }

    listen() {
        this.server.listen(this.port, () => {
            console.log('Server running on port', this.port);
        });
    }
}

module.exports = Server;
