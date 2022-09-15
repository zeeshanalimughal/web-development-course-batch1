const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile("index");
})

app.listen(5000,function(){
    console.log('listening on http://localhost:5000')
})