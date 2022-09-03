const fs = require('fs')


// fs.writeFileSync('data.txt',"Writing to file")
// fs.writeFile('data2.txt',"Hello\nWorld",function(err){
//     if(err) console.error(err.message)
//     // console.log("File written successfully")
//     fs.readFile('data2.txt','utf8',function(err,data){
//         console.log(data)
//     })
// })


// fs.mkdirSync("js")
// fs.mkdir("nodejs",function(err){
//         if(err) console.error(err.message)
//         console.log("Directory created")
// })


// console.log(fs.statSync(__filename))


// fs.stat(__filename, function (err, stat) {
// if (err) console.error(err.message)
// console.log(stat.isFile())
// console.log(stat.size)
// })

// fs.stat(__dirname, function (err, stat) {
// if (err) console.error(err.message)
//     // console.log(stat.isDirectory())
//     console.log(stat.isFile())
// })



// fs.renameSync("js","css")
// fs.rename("css","js",function(err){
//     if (err) return console.error(err.message)
//     console.log("file rename successfully")
// })

const user = {
    name: "Zeehsan",
    age: 22,
    phone: 3242089
}
// fs.appendFileSync("user.json",JSON.stringify(user))

// fs.appendFile("user.json",JSON.stringify(user),function(err){
//     if (err) return console.error(err.message)
//         console.log("file appended successfully")
// })



// fs.unlinkSync("user.json")
// fs.unlink("data2.txt", function (err) {
//     if (err) return console.error(err.message)
//     console.log("file unlink successfully")
// })




// console.log(fs.existsSync("data.tx"))
// console.log(fs.existsSync("css"))
// fs.exists("css", function (check) {
//     console.log(check)
// })


// fs.access("css", function (err) {
//     if (err) return console.error(err.message)
//     console.log("yes")
// })


// console.log(fs.readdirSync(__dirname))


