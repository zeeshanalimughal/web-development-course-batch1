const express = require('express');
// const fs = require('node:fs');
const middlewares = require('./middlewares')
const app = express();
const router = require("./router")
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const rateLimit = require('express-rate-limit')

// app.use(middlewares.middleMan)
// app.use(middlewares.middleMan2)
app.use(morgan("tiny"))
app.use(helmet())
app.use(cors({ origin: 'http://127.0.0.1:5500',}))

const limiter = rateLimit({
	windowMs: 1 * 60 * 1000, // 15 minutes
	max:4, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

app.use(limiter)
app.use(router)


app.listen(5000,function(){
    console.log('listening on http://localhost:5000')
})