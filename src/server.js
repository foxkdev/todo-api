const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

class Server {
    constructor({ router }) {
        this.app = express()
        this.app.use(cors())
        this.app.use(morgan(':method :url :status :response-time ms'))

        this.app.use(router)
    }
    start() {
        return new Promise((resolve, reject) => {
            const server = this.app.listen(process.env.NODE_PORT, (error) => {
                const { port } = server.address()
                if(error) reject(error)
                console.log(`🤘 API - Port ${port}`)
                resolve(server)
            })
        })
    }
}
module.exports = Server