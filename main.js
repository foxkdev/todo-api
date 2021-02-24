require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const app = express()
const port = process.env.NODE_PORT
require('./container')

const TasksController = require('./infraestructure/rest/task-controller')
app.use(morgan(':method :url :status :response-time ms'))

app.use('/tasks', TasksController)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
