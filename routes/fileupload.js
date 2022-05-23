let http = require('http');
let formidable = require('formidable');
let fs = require('fs');
const client = require("../models/connection");




const fileupload = (request, response) => {
    //Create an instance of the form object
    let form = new formidable.IncomingForm();
    let a = __dirname
    a=a.substring(0,42)
    a=a+"public"
    //Process the file upload in Node
    form.parse(req, function (error, fields, file) {
        let filepath = file.fileupload.filepath;
        let newpath = 'a';
        newpath += file.fileupload.originalFilename;

        //Copy the uploaded file to a custom folder
        fs.rename(filepath, newpath, function () {
            //Send a NodeJS file upload confirmation message
            res.write('NodeJS File Upload Success!');
            res.end();
        });
    });
}

module.exports = {
    fileupload
}