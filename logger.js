const evEm = require('events');
const uuid = require('uuid');

// console.log(uuid.v4());

class logger extends evEm{
    jol(msg){
        this.emit('message',{id:uuid.v4(),msg})
    }
}

module.exports = logger;