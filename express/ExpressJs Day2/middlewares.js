exports.middleMan = (req,res,next) => {
    // console.log(req.method,req.url)
    if(req.params.username==="admin2"){
        // res.json({message: "Authenticated Successfully"})
        next()
        
    }else{
         res.json({message: "Unauthorized"})
    }
}
exports.middleMan2 = (req,res,next) => {
    console.log(req.path)
    next()
}



