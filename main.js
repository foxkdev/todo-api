require('dotenv').config()
const Server = require('./src/server')
const server = new Server()
server.start().catch((error) => {
    console.error(error.stack)
    process.exit()
})
