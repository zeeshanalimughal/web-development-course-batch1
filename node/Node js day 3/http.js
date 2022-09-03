const http = require('http')
const fs = require('fs')


http.request('http://jsonplaceholder.typicode.com/users',function(response){
    var str = '';
  response.on('data', function (chunk) {
    str += chunk;
  });
  response.on('end', function () {
    console.log(JSON.parse(str)[0]);
  });

  response.on('error', function (err) {
    console.log(err.message);
  })
}).end()

http.createServer(function (request, response) {
    const html  = fs.readFileSync("user.html")
    response.setHeader('Content-Type', 'application/json');

    response.end(JSON.stringify({
        name: "Zeehsan",
        age: 22,
        phone: 3242089
    }))

}).listen(4500)


