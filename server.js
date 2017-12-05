var Box = require('node-box-api');
var express = require('express');
  var app     = express();
  var path = require('path');
  var ejs= require('ejs');
 
var box = new Box({
    client_id: '2lunnygdfowl34rgo0p8yc9t895x7shq',
    client_secret: '8bLmll2oPJLpYLwzjedtSInsZUcxW2IC',
    access_token: 'at7MFP5IS3qNiFuHZV8BtfEsKEPwaDnc',
    refresh_token: 'at7MFP5IS3qNiFuHZV8BtfEsKEPwaDnc'
});


var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}



box.folders.root(function(err, res) {
    console.log(res);
});

box.folders.info('42697001176', function(err, res) {
    console.log(res);
});

var params = {
    min_height: 32,
    min_width: 32,
    max_height: 256,
    max_width: 256,
    extension: 'jpg'
};
box.files.thumbnail('42697001176', params, function(err, res) {
    console.log(res);
    //res.send({message: params});
});

box.files.thumbnail('42697001176', function(err, res) {
    console.log(res);
});




 // load the express package and create our app
  
    
  // send our index.html file to the user for the home page
  app.get('/', function(req, res) {
  	res.sendFile(path.join(__dirname + '/index.html'));
  });
 
 // start the server
 app.listen(3000);
 console.log('3000 is the magic port!')