require('dotenv').config()

const container = require('./src/container')
const Server = container.resolve('server')

Server.start().catch((error) => {
    console.error(error.stack)
    process.exit()
})
