const socketController = (socket) => {
    console.log('Client connected', socket.id);

    socket.on('disconnect', () => {
        console.log('Client disconnected!');
    });

    socket.on('send-message', (payload, callback) => {
        socket.broadcast.emit('send-message', payload);
        const id = new Date().getTime();
        callback(id);
    });
};

module.exports = socketController;
