'use strict';

const events = require('./events');
require('./manager');
require('./pilot');

events.on('newFlight', newFlight);
events.on('tookOff', tookOff);
events.on('arrived', arrived);

function newFlight(info) {
  console.log(`Flight {
        event: 'new flight',
        time: ${new Date().toUTCString()},
        Details: {
            airline: '${info.airline}',
            flightNO: '${info.flightNO}',
            pilot: '${info.pilot}',
            destination: '${info.destination}',
        }
    }`);
}

function tookOff(info) {
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
}

function arrived(info) {
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
}
