// Adjust the webSocket protocol to what is being used for HTTP
const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);

// Display that we have opened the webSocket
socket.onopen = (event) => {
  appendMsg('system', 'Websocket', 'connected');
};

// Display messages we receive from our friends
socket.onmessage = async (event) => {
  const text = await event.data.text();
  const chat = JSON.parse(text);
  appendMsg('friend', chat.name, chat.msg);
};

// If the webSocket is closed then disable the interface
socket.onclose = (event) => {
  appendMsg('system', 'Websocket', 'disconnected');
};

// Send a message over the webSocket
function sendMessage() {
  const msgEl = document.querySelector('#chatInput');
  const msg = msgEl.value;
  if (!!msg) {
    appendMsg('me', 'Me', msg);
    const name = document.querySelector('#playerUsername').value;
    socket.send(`{"name":"${name}", "msg":"${msg}"}`);
    msgEl.value = '';
  }
}

// Create one long list of messages
function appendMsg(cls, from, msg) {
  const chatText = document.querySelector('#chat-text');
  if (from === "Websocket") {
    chatText.innerHTML =
    chatText.innerHTML +
    `<div><span class="${cls}">${from}</span> ${msg}</div>`;
  } else {
    chatText.innerHTML =
        chatText.innerHTML +
        `<div><span class="${cls}">${from}</span>: ${msg}</div>`;
  }
}

// Send message on enter keystroke
const input = document.querySelector('#chatInput');
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});