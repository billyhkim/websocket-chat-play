const ws = new WebSocket('ws://localhost:8888');

ws.addEventListener('open', event => {
  console.log('made a connection!');
  ws.send('greetings!');
});

ws.addEventListener('message', event => {
  console.log('got a message', event.data);
});