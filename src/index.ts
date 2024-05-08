// ----------------------------------------------------------- http module ------------------------------------------------
// using the http bundle provide by the NodeJs runtime

// import WebSocket, { WebSocketServer } from 'ws';
// import http from 'http';

// // create a http server 
// const server = http.createServer(function(request: any, response: any) {
//     console.log((new Date()) + ' Received request for ' + request.url);
//     response.end("hi there");
// });


// // create a websocket server
// const wss = new WebSocketServer({ server });

// let usercount=0;
// wss.on('connection', function connection(socket) {
//   socket.on('error', console.error);

//   // when there is a message broadcast it to every client
//   socket.on('message', function message(data, isBinary) {
//     wss.clients.forEach(function each(client) {
//       if (client.readyState === WebSocket.OPEN) {
//         client.send(data, { binary: isBinary });
//       }
//     });
//   });

//   usercount+=1;
//   console.log("user connected ",usercount);
//   socket.send('Hello! Message From Server!!');
// });

// server.listen(8080, function() {
//     console.log((new Date()) + ' Server is listening on port 8080');
// });




// ---------------------------------------------express module ---------------------------------------------------------
// import express from 'express'
// import { WebSocketServer,WebSocket } from 'ws'

// const app = express()
// const httpServer = app.listen(8080, () => {
//     console.log('Server started on port 8080')
    
// })

// const wss = new WebSocketServer({ server: httpServer });

// wss.on('connection', function connection(ws) {
//   ws.on('error', console.error);

//   ws.on('message', function message(data, isBinary) {
//     wss.clients.forEach(function each(client) {
//       if (client.readyState === WebSocket.OPEN) {
//         client.send(data, { binary: isBinary });
//       }
//     });
//   });

//   ws.send('Hello! Message From Server!!');
// });