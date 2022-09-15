const express = require('express')
const router = express.Router()
const middlewares = require('./middlewares')


router.get("/test", function(req, res){
    res.json({msg:"Testing route ..."})
})
router.get("/admin/:username",middlewares.middleMan, function(req, res){
    res.json({msg:"Authenticated"})
})

router.get('/hello', (req, res) => {
    res.json({msg:"Hello World"})
})



module.exports = router