require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const app = express()
const port = process.env.NODE_PORT

app.use(morgan(':method :url :status :response-time ms'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
