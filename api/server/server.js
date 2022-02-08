const path = require('path');
const express = require('express');

const server = express();
const questions = require('./questions');

server.use(express.static(__dirname + "/public"));

server.get('/api/questions', (request, response) => {
    response.send(questions);
})

server.get("*", (request, response) => {
    response.sendFile(path.resolve(__dirname, "/public/index.html"));
});

module.exports = server;