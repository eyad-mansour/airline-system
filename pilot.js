'use strict';
const events = require('./events');

events.on('took-off', tookOff);

function tookOff() {
  let id = uuidv4();
  let dateTime = `Pilot: flight with ID: ${id} ${Date()} took-off`;
  console.log(dateTime);
}

setInterval(() => {
  events.emit('took-off');
}, 4000);
