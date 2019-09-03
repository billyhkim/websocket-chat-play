$(document).ready(startApp);

const ws = new WebSocket('ws://localhost:8888');

ws.addEventListener('open', event => {
  console.log('made a connection!');
  sendPacketMessage('someone has joined the chat');
});

ws.addEventListener('message', event => {
  console.log('got a message', event.data);
  const data = JSON.parse(event.data);
  const message = data.message;
  const from = data.from;
  displayMessage(from, message);
});

function startApp() {
  $("#send").click(sendMessage);
}

function sendPacketMessage(message) {
  const packetToSend = JSON.stringify({
    name: $("#name").val(),
    message
  });
  ws.send(packetToSend);
}

function sendMessage() {
  const message = $("#outbound-message").val();

  sendPacketMessage(message);
  $("#outbound-message").val('');
}

function displayMessage(name, message) {
  var messageContainer = $("<div>", {
    class: 'container-message'
  });
  var name = $("<div>", {
    text: name,
    class: "name"
  });
  var message = $("<div>", {
    text: message,
    class: 'message'
  })
  messageContainer.append(name, message);
  $("#display").prepend(messageContainer);
}