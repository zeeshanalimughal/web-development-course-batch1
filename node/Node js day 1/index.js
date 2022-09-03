// console.log("Hello world")


// console.log(__dirname)
// console.log(__filename)

let i = 0
const intervel = setInterval(function() {
console.log(i)
if(i===2){
    // clearInterval(intervel)
    process.exit()
}
i++
},1000)


// console.log(process.exit())





