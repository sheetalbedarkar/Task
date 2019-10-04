const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
const myEmitter2 = new MyEmitter();

let m = 0, n = 0;
//attach a full listener
myEmitter.on('event', () =>
{
    console.log("M value  : ",++m);
});
myEmitter.emit('event');
myEmitter.emit('event');

//it is a one time listener that will detach after firing once.
myEmitter2.once('event', () =>
{
    console.log("N value : ",++n);
});
myEmitter2.emit('event');
myEmitter2.emit('event');