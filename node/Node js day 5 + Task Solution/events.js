const events = require('events')

const eventEmitter = new events.EventEmitter()


eventEmitter.on("message",function(num, msg){
    console.log(num,msg)
})

setInterval(function(){
    eventEmitter.emit("message",2,"Hello")
},1000)
