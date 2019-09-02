const WebSocket = require('ws');

const ws = new WebSocket.Server({
  'port': 8888
});

ws.on('connection', conn => {
  console.log('GOT a connection!');
  conn.on('message', message => {
    console.log('got a message', message);
  })
  conn.on('close', () => {
    console.log('connection closed');
  })
})