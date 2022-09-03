const http = require('http')



// console.log(http.STATUS_CODES)
// console.log(http.METHODS)




// let req = http.request("http://jsonplaceholder.typicode.com/users", function (response) {
//   let products=''

//   response.on("data", function (chunk) {
//     products+=chunk
//   })

//   response.on("end", function () {
//     console.log(JSON.parse(products))
//   })
// })

// req.on("error", function (err) {
//   console.log(err.message)
// })
// req.end()



// http.createServer(function(req, res) {
//   // console.log(req.method)
//   // console.log(req.url)
//   // console.log(req.statusCode)



//   res.end("Hello")

// }).listen(3000)


// const server = http.createServer(function(request, res) {

//   res.writeHead(200,{
//     // 'Content-Type': 'text/plain',
//     // 'Content-Type': 'text/html',
//     'Content-Type': 'application/json'
//   });


//   let products=''

//   let apiReq = http.request("http://jsonplaceholder.typicode.com/users", function (response) {

//   response.on("data", function (chunk) {
//     products+=chunk
//   })

//   response.on("end", function () {
//     console.log("Successfully loaded")
//     res.end(products);
//   })
// })

// apiReq.on("error", function (err) {
//   console.log(err.message)
// })
// apiReq.end()

// })

// server.listen(3000,function() {
//   console.log("Server listening on http://localhost:"+3000)
// })










