var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const corsOpts = { origin: '*', methods: ['GET', 'POST'], allowedHeaders: ['Content-Type']};



var app = express();
app.use(cors(corsOpts));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



const bodyParser = require('body-parser')
const users=require('./routes/user')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)


const stores = require('./routes/store')
const cfg = require('./routes/cfg')
const software=require('./routes/software')
const test=require('./routes/tests/testestetestetts')

//user
app.get('/users', users.getUsers)
app.get('/users/:id', users.getUserById)
app.post('/users', users.createUser)
app.post('/login', users.getLogin)
app.put('/changepass', users.passwordChange)
app.put('/users/:id', users.updateUser)
app.delete('/users/:id', users.deleteUser)



//cfg
app.get('/cfg', cfg.getCfg)
app.get('/cfg/:id(\\d+)', cfg.getCfgById)
app.get('/cfg/name/:name', cfg.getCfgByName)
app.post('/cfg', cfg.createCfg)
app.delete('/cfg/:id', cfg.deleteCfg)
app.get('/cfg/software/:id', cfg.getCfgBySoftwareId)

//store
app.get('/stores', stores.getStores)

//software
app.get('/software/games',software.getGames)
app.get('/software/apps',software.getApps)



app.post('/filepost',test.postFile)



module.exports = app;
