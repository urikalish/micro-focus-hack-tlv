
console.log('admin-common.js');

let userNames = [];

registerAdmin = (onServerMsgCallback, onUserListUpdateCallback) => {
    console.log(`registerAdmin()`);
    connectToServer('ADMIN');
    
    socket.on('server-msg', (data) => {
        console.log(`on.server-msg: ${data.msg}`);
        onServerMsgCallback(data);
    });  

    socket.on('server-msg-user-list-update', (data) => {
        console.log(`on.server-msg-user-list-update: ${data.msg}`);
        userNames = data.msg ? data.msg.split(',') : [];
        onUserListUpdateCallback(data);
    });     
};

broarcastToMobiles = (data) => {
    console.log(`broarcastToMobiles(${data.msg})`);
    socket.emit('admin-msg-broadcast-to-clients', data);
};
    
startGame = (gamePhase) => {
    console.log(`startGame()`);
    for (let i=0; i<10; i++) {
        setTimeout(gamePhase, 5000);
    }
};

onServerMsg = (data) => {
    console.log(`onServerMsg(${data.msg})`);    
};

onUserListUpdate = (data) => {
    console.log(`onUserListUpdate(${data.msg})`);
    let namesElement = document.getElementById('user-names');
    while (namesElement.hasChildNodes()) {
        namesElement.removeChild(namesElement.firstChild);
    }
    userNames.forEach((user) => {
        var liElement = document.createElement('div');
        liElement.innerText = user;
        namesElement.appendChild(liElement);
    });
};

registerAdmin(onServerMsg, onUserListUpdate);
