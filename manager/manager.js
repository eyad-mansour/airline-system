'use strict';

const {faker} = require('@faker-js/faker');
const {v4: uuidv4} = require('uuid');

// const events = require('../events');

const io = require('socket.io-client');

const socket = io.connect('http://localhost:3000');

// require('./pilot');
// require('../server/system');

// console.log(faker.name.firstName());
// console.log(faker.address.city());

setInterval(() => {
  const info = {
    airline: 'singapore airline',
    flightNO: uuidv4(),
    pilot: faker.name.firstName(),
    destination: faker.address.city(),
  };
  console.log(
    `Manager: new flight with number: ${info.flightNO}  have been scheduled`
  );
  socket.emit('newFlight', info);
}, 9000);

socket.on('arrived', arrived);

function arrived(info) {
  console.log(
    `Manager: we are greatly thankful for the amazing flight, ${info.pilot}`
  );
}
