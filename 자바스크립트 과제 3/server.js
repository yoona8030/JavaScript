const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// 추가: 정적 파일 제공
app.use('/socket.io', express.static(__dirname + '/node_modules/socket.io/dist'));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', (socket) => {
    console.log('A user connected');

    // 클라이언트에서 'line' 이벤트를 받으면 모든 클라이언트에게 전달
    socket.on('line', (data) => {
        io.emit('line', data);
    });
});

server.listen(52273, () => {
    console.log('Server is running on http://localhost:52273');
});
