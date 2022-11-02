'use strict';

// const events = require('../events');
const io = require('socket.io')(3000);
const air = io.of('/airline');
// require('../client/manager');
// require('../client/pilot');

io.on('connection', newFlight);
air.on('connection', tookOff);
io.on('connection', arrived);

function newFlight(socket) {
  socket.on('newFlight', (info) => {
    io.emit('newFlight', info);
  });
}

function tookOff(socket) {
  socket.on('tookOff', (info) => {
    air.emit('tookOff', info);
    console.log(`Flight {
              event: 'took-off',
              time: ${new Date().toUTCString()},
              Details: {
                  airline: '${info.airline}',
                  flightNO: '${info.flightNO}',
                  pilot: '${info.pilot}',
                  destination: '${info.destination}',
              }
          }`);
  });
}

function arrived(socket) {
  socket.on('arrived', (info) => {
    io.emit('arrived', info);
    console.log(`Flight {
              event: 'arrived',
              time: ${new Date().toUTCString()},
              Details: {
                  airline: '${info.airline}',
                  flightNO: '${info.flightNO}',
                  pilot: '${info.pilot}',
                  destination: '${info.destination}',
              }
          }`);
  });
}
