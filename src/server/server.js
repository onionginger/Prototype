const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http').Server(app);
const io = require('socket.io')(http,{
	cors: {
	origin: "http://localhost:4200",
	methods: ["GET", "POST"],
	}
})

const sockets = require('./socket.js');
const server = require('./listen.js');

app.use(cors());

sockets.connect(io, 3000);

server.listen(http, 3000);
