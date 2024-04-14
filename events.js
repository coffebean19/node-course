const EventEmitter = require('events');
const celebrity = new EventEmitter();

//Sub to celeb for obs 1
celebrity.on('race win', () => {
  console.log("Congrats jy wen.")
});

//Sub to celeb for obs 2
celebrity.on('race win', () => {
  console.log("Ek huil.")
});

process.on("exit", (code) => {
  console.log("Exit code: ", code);
});

celebrity.emit('race win');
celebrity.emit('race win');