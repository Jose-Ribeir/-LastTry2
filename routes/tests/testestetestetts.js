a=__dirname
a=a.substring(0,42)
a=a+"public"
console.log(""+a)




// var http = require('http');
//
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//     res.write('<input type="file" name="filetoupload"><br>');
//     res.write('<input type="submit">');
//     res.write('</form>');
//     return res.end();
// }).listen(8080);
//
//
//     var http = require('http');
// var formidable = require('formidable');
//
// http.createServer(function (req, res) {
//     if (req.url == '/fileupload') {
//         var form = new formidable.IncomingForm();
//         form.parse(req, function (err, fields, files) {
//             res.write('File uploaded');
//             res.end();
//         });
//     } else {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//         res.write('<input type="file" name="filetoupload"><br>');
//         res.write('<input type="submit">');
//         res.write('</form>');
//         return res.end();
//     }
// }).listen(8080);
//
//

// var formidable = require('formidable');
// var fs = require('fs');
//
//
//
// const postFile = (req, res) => {
//
//     var form = new formidable.IncomingForm();
//     form.parse(req, function (err, fields, files) {
//         var oldpath = files.filetoupload.filepath;
//         var newpath = 'C:/Users/josep/Desktop' + files.filetoupload.originalFilename;
//         fs.rename(oldpath, newpath, function (err) {
//             if (err) throw err;
//             res.write('File uploaded and moved!');
//             res.end();
//         });
//     });
//
// }
//
// module.exports={postFile}
