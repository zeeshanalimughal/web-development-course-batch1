const fs = require('fs');
// const server = require('http').createServer(handler);


// function handler(req,res){
   const stream =  fs.createReadStream('large.txt',{ highWaterMark: 2 * 1024, encoding: 'utf8' })

   stream.on("data",function(chunck){
      setTimeout(function(){
         stream.resume()
      },2000)
      console.log(`Received: ${chunck}`);
      stream.pause()
      console.log("\nWaiting...\n")
   })
   stream.on("end",function(){
      res.end()
   })
   stream.on("error",function(err){
      console.error(err)
   })
   
   
  
// }
// server.listen(45000)

