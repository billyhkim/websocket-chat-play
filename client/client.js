$(document).ready(startApp);

const ws = new WebSocket('ws://localhost:8888');

ws.addEventListener('open', event => {
  console.log('made a connection!');
  ws.send('greetings!');
});

ws.addEventListener('message', event => {
  console.log('got a message', event.data);
  displayMessage(event.data);
});

function startApp() {
  $("#send").click(sendMessage);
}

function sendMessage() {
  const message = $("#outbound-message").val();
  ws.send(message);
  $("#outbound-message").val('');
}

function displayMessage(message) {
  $("#display").html(message + "<br>" + $("#display").html());
}