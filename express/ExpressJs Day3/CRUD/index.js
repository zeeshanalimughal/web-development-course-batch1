const express = require('express');
const router = require('./routes/route')
const app = express();

app.use(express.json())
app.use('/api/user',router)

app.listen(5000,function(){
    console.log('listening on http://localhost:5000')
})