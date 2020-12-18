const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
var messages = require('./messageQueue');



// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('this is the request object')
  // console.log(req);

  console.log('Serving request type ' + req.method + ' for url ' + req.url);


  if (req.method === 'OPTIONS') {
    res.writeHead(200, headers);
    // console.log(res);
    res.end();
  } else if ((req.method === 'GET') && (req.url.includes('swimCommand'))) {
    let message = 'left';
    // var movementArray = ['up', 'down', 'left', 'right'];
    // var randomMovement = movementArray[Math.floor(Math.random() * movementArray.length)];
    //console.log(`the random movement is ${randomMovement}`);
    res.writeHead(200, headers);
    // res.write(randomMovement);

    message = messages.dequeue()
    message = message ? message : 'left'

    console.log(' message: ', message)
    res.write(message);
    res.end();
  } else if (req.method === 'GET') {

    //if .background.jpg does not exist
    if (!fs.existsSync('../background.jpg')) {
      res.writeHead(404, headers);
      res.end();
    } else {
      res.writeHead(200, headers);
      res.end();
    }
      //httpHandler.backgroundImageFile = path.join('.', 'spec', 'background.jpg');
      //send 404 response code
  }

  // res.writeHead(200, headers);
  // res.end();
  next(); // invoke next() at the end of a request to help with testing!
};
