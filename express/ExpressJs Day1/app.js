const express  = require('express');
const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended:false}));


app.get("/about",(req,res)=>{
    res.status(200).sendFile(__dirname + "/about.html")
})

app.get("/home",(req,res)=>{
    res.status(200).sendFile(__dirname + "/home.html")
})


// app.get("/api/user",function(req,res){
//     res.status(200).json([{name:"Zeeshan",phone:"123456789"},{name:"Zeeshan",phone:"123456789"},{name:"Zeeshan",phone:"123456789"},{name:"Zeeshan",phone:"123456789"}])
// })


// app.get("/*",(req,res)=>{
//     res.status(400).send("No page found")
// })

app.get("/test/test2/hello",(req,res)=>{
    // console.log(req.originalUrl)
    // console.log(req.host)
    // console.log(req.hostname)
    // console.log(req.ip)
    // console.log(req.method)
    // console.log(req.path)
    // console.log(req.protocol)
    // console.log(req.query)
    // console.log(req.route.path)
    res.end()
})




// app.get("/user/:userId/:gender",(req,res)=>{

//    const {userId,gender} = req.params

//     console.log(userId,gender)

//     res.end()
// })

app.get("/user/:userId/:gender/online",(req,res)=>{
   const {userId,gender} = req.params
    console.log(userId,gender)
    res.end()
})

app.get("/login",(req,res)=>{
   
    res.sendFile(__dirname + "/login.html")
    // res.end()
})


app.post("/login",function(req,res){

    const {username,password} = req.body
    console.log(username,password)
    res.end()
})

app.listen(5000)