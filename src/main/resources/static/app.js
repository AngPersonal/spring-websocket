var ws = null;

function connect() {
    var params = (new URL(document.location)).searchParams;
    ws = new WebSocket('ws://localhost:8080/chat?username=' + params.get('username'));
    ws.onmessage = function (res) {
        showMessage(res.data);
    }
}

function disconnect() {
    if (ws != null) {
        ws.close();
    }
}

function sendMessage() {
    var to = document.getElementById('to').value;
    var content = document.getElementById('content').value;
    ws.send(JSON.stringify({'to': to, 'content' : content}));
}

function showMessage(message) {
    var log = document.getElementById('log');
    var p = document.createElement('p');
    p.appendChild(document.createTextNode(message));
    log.appendChild(p);
}