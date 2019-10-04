const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on('event', function(a,b)
{
    /**
     * Any function passed as the setImmediate() argument is a callback 
     * that’s executed in the next iteration of the event loop.
     */
    setImmediate(()=>
    {
        console.log('this happens asynchronously');
    });
    function cb()
    {
        console.log('processed in next iteration',a,b);
    }
    /**
     * A function passed to process.nextTick() is going to be executed on 
     * the current iteration of the event loop, after the current operation ends. 
     * This means it will always execute before setTimeout and setImmediate.
     */
    process.nextTick(cb)
    console.log('process in first iteration',a,b);
});
myEmitter.emit('event', 'Technoetics', 'Club');