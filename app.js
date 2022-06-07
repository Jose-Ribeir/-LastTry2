var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const corsOpts = { origin: '*', methods: ['GET', 'POST','DELETE'], allowedHeaders: ['Content-Type']};
// import public from './public'


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
const fileupload=require('./routes/fileupload')
const formidable = require("formidable");
const fs = require("fs");

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
app.get('/software/:id(\\d+)',software.getSoftwareById)
app.post('/software',software.createSoftware)


app.get('/users/search/:text', users.search)
app.get('/software/search/:text', software.search)
app.get('/cfg/search/:text', cfg.search)




app.post('/fileupload',function (req, res) {

    //Create an instance of the form object
    let form = new formidable.IncomingForm();
    let a = __dirname
    console.log("DirName  "+a)
    a=a.substring(0,42)
    a=a+"/public/"
    console.log(""+a)
    //Process the file upload in Node
    form.parse(req, function (error, fields, file) {
        let filepath = file.fileupload.filepath;
        console.log("file path "+ filepath)
        let newpath = "/public/test"
        newpath=newpath+"/"
        newpath += file.fileupload.originalFilename;
        console.log(""+newpath)
        //Copy the uploaded file to a custom folder
        // var mv = require('mv');


            fs.rename(filepath, newpath, function () {


                //Send a NodeJS file upload confirmation message
                res.write('NodeJS File Upload Success!');


                res.end();
            });


    });

})


module.exports = app;
