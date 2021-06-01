const express  = require('express');
const cors = require('cors')

class Server{
    constructor(){
        this.app = express();
        this.albumsPath = '/api/albums';
        this.artistsPath = '/api/artists';
        this.tracksPath = '/api/tracks';
        this.port = process.env.PORT;
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(cors());   
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.albumsPath, require('../routes/albums'));
        this.app.use(this.artistsPath, require('../routes/artists'));
        this.app.use(this.tracksPath, require('../routes/tracks'));
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.info(`Server running on port ${this.port}`);
        });
    }
}

module.exports = Server;