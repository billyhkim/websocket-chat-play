const WebSocket = require('ws');

const ws = new WebSocket.Server({
  'port': 8888
});

const connections = [];

ws.on('connection', conn => {
  connections.push(conn);
  console.log('GOT a connection!', 'count: ', connections.length);
  conn.on('message', message => {
    console.log('got a message', message);
    for (var connIndex = connections.length - 1; connIndex >= 0; connIndex--) {
      connections[connIndex].send(message);
    }
  })
  conn.on('close', () => {
    console.log('connection closed');
  })
})