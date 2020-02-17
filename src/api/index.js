import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

const subscribeToTimer = (callback) => {
  socket.on('timer', timestamp => callback(timestamp));
  // socket.emit('subscribeToTimer', 1000);
}

const subscribeToText = (callback) => {
  socket.on('output-text', text => callback(text));
}

const emitText = (text) => {
  socket.emit('input-text', text)
}

export {subscribeToTimer, subscribeToText, emitText}