'use strict';

const {v4: uuidv4} = require('uuid');
const events = require('./events');
// const {faker} = require('@faker-js/faker');
const id = uuidv4();
const flight = {};

events.on('new-flight', logEvents);

function logEvents() {
  const dateTime = `Manager: new flight with ID: ${id} ${Date()} new flight has been scheduled`;
  console.log(dateTime);
}
logEvents('hello');

setInterval(() => {
  events.emit('new-flight');
}, 9000);
