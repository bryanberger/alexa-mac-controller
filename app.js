require('dotenv').config()
const exec = require('child_process').exec
const wemore = require('wemore')
const computer = wemore.Emulate({
  friendlyName: 'Computer',
  serial: process.env.SERIAL
})

computer.on('listening', function() {
  console.log('Computer listening on', this.port)
})

computer.on('on', function() {
  exec('caffeinate -u -t 2', function(error, stdout, stderr) {})
})

computer.on('off', function() {
  exec('pmset sleepnow', function(error, stdout, stderr) {})
})

// computer.on('state', function(binaryState) {
//     console.log("Computer set to=", binaryState);
//     computer.close(); // stop advertising the device
// });
