//Import dependencies

var express = require('express');
var mongoose = require('mongoose');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

//Serve static files
app.use(express.static(_dirname + '/public'));

//Connect to mongoose
mongoose.connect("mongodb://127.0.0.1:27017/chat");