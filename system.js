'use strict';

const events = require('./events');

events.on('flight', flights);

let details = {
  event: '',
  time: Date(),
  Details: {
    airLine: 'Royal Jordanian Airlines',
    destination: Manchester,
    UK,
    pilot: 'Jane doe',
    flightID: 'ds7g86sa8v87dsv60v876d',
  },
};

function flights() {
  let data = `flight with ID: ${id} ${Date()} took-off`;

  console.log(data);
}

setInterval(() => {
  events.emit('flight');
}, 4000);
