// using the http bundle provide by the NodeJs runtime

import WebSocket, { WebSocketServer } from 'ws';
import http from 'http';

// create a http server 
const server = http.createServer(function(request: any, response: any) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.end("hi there");
});


// create a websocket server
const wss = new WebSocketServer({ server });

let usercount=0;
wss.on('connection', function connection(socket) {
  socket.on('error', console.error);

  // when there is a message broadcast it to every client
  socket.on('message', function message(data, isBinary) {
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data, { binary: isBinary });
      }
    });
  });

  usercount+=1;
  console.log("user connected ",usercount);
  socket.send('Hello! Message From Server!!');
});

server.listen(8080, function() {
    console.log((new Date()) + ' Server is listening on port 8080');
});