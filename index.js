const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const {connect} = require('./config/db')

const diosesRoutes = require('./api/routes/dioses.routes')

const server = express();
connect();

PORT = 5000;

server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use((req, res, next) =>{
    res.header("Acces-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Acces-Control-Allow-Credentials", true);
    res.header("Acces-Control-Allow-Headers", "Content-type");
    next();
});
server.use(cors({
    origin: "*",
    Credentials: true,

}));

server.use(logger('dev'));



server.use('/dioses', diosesRoutes);

server.listen(PORT, () =>{
    console.log(`Server listening on port http://localhost:${PORT}`);
});
