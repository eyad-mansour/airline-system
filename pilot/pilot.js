'use strict';

// const events = require('./events');
const io = require('socket.io-client');

const socket = io.connect('http://localhost:3000');

// require('./manager');
// require('../server/system');
const airSocket = io.connect('http://localhost:3000/airline');

socket.on('newFlight', newFlight);
function newFlight(info) {
  setTimeout(() => {
    console.log(`Pilot: flight with ID '${info.flightNO}' took-off`);
    airSocket.emit('tookOff', info);
  }, 4000);

  setTimeout(() => {
    console.log(`Pilot: flight with ID '${info.flightNO}' arrived`);
    socket.emit('arrived', info);
  }, 7000);
}
