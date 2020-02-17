const io = require('socket.io')();

io.on('connection', (client) => {
   // on socket activity on the userEvent channel,
   client.on('input-text', (text) => {
    console.log(text)
     io.emit('output-text', text)
     //broadcast?
    })
})

const port = 8000;
io.listen(port);
console.log('server.js - listening on port: ', port);
