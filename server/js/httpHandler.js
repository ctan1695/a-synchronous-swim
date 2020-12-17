const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

module.exports.router = (req, res, next = ()=>{}) => {
  console.log(req);

  console.log('Serving request type ' + req.method + ' for url ' + req.url);

  if (req.method === 'GET') {
    console.log('recieved a GET request!')
    var movementArray = ['up', 'down', 'left', 'right'];
    var randomMovement = movementArray[Math.floor(Math.random() * movementArray.length)];
    console.log(`the random movement is ${randomMovement}`);
    res.writeHead(200, headers);
    res.write(randomMovement);
    // console.log(res._data.toString());
    res.end();
  } else if (req.method === 'OPTIONS') {
    res.writeHead(200, headers);
    console.log(res);
    res.end();
  }

  // res.writeHead(200, headers);
  // res.end();
  next(); // invoke next() at the end of a request to help with testing!
};
