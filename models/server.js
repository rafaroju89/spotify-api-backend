const express  = require('express');
const cors = require('cors')

/*Creation of the Server class */
class Server{
    constructor(){
        this.app = express();
        this.albumsPath = '/v1/albums';
        this.artistsPath = '/v1/artists';
        this.tracksPath = '/v1/tracks';
        this.port = process.env.PORT;
        this.middlewares();
        this.routes();
    }

    /*Middlewares configuration */
    middlewares(){
        this.app.use(cors());   
        this.app.use(express.json());
    }

    /*Routes configuration */
    routes(){
        this.app.use(this.albumsPath, require('../routes/albums'));
        this.app.use(this.artistsPath, require('../routes/artists'));
        this.app.use(this.tracksPath, require('../routes/tracks'));
    }

    /*Method that sets the port and runs the server */
    listen(){
        this.app.listen(this.port, ()=>{
            console.info(`Server running on port ${this.port}`);
        });
    }
}

module.exports = Server;