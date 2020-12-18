var messages = require('./js/messageQueue');



const keypressHandler = require('./js/keypressHandler');
keypressHandler.initialize((message) => {
    console.log(`Message received: ${message}`)
    messages.enqueue(message)
  });

//my guess
//we have to take message and somehow make it available in httpHandler.js
//this message gets put into the get response

const httpHandler = require('./js/httpHandler');


const http = require('http');
const server = http.createServer(httpHandler.router);

const port = 3000;
const ip = '127.0.0.1';
server.listen(port, ip);

console.log('Server is running in the terminal!');
console.log(`Listening on http://${ip}:${port}`);
