'use strict';

const events = require('./events');
require('./manager');
require('./system');

events.on('newFlight', newFlight);

function newFlight(info) {
  setTimeout(() => {
    console.log(`Pilot: flight with ID '${info.flightNO}' took-off`);
    events.emit('tookOff', info);
  }, 4000);

  setTimeout(() => {
    console.log(`Pilot: flight with ID '${info.flightNO}' arrived`);
    events.emit('arrived', info);
  }, 7000);
}
