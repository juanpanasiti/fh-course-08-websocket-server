const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMessage = document.querySelector('#txtMessage');
const btnSend = document.querySelector('#btnSend');

const socket = io();

socket.on('connect', () => {
    console.log('Connected to the server');
    lblOnline.style.display = '';
    lblOffline.style.display = 'none';
});

socket.on('disconnect', () => {
    console.log('Disconnected from the server');
    lblOnline.style.display = 'none';
    lblOffline.style.display = '';
});

socket.on('send-message', (payload) => {
    console.log('from server')
    console.log(payload)
});

btnSend.addEventListener('click', () => {
    const msg = txtMessage.value;
    const payload = {
        msg,
        uid: 'kdLKjslkse34rl4tslk34',
        date: new Date()
    }
    socket.emit('send-message', payload, (id) => {
        console.log('From server', id)
    })
});
