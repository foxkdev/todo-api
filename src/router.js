
const express = require('express')

class Router {
    constructor() {
        this.router = express.Router()

        this.router.get('/test', (req, res, next) => {
            res.json({message: 'test'})
        })
        this.router.get('*', (req, res) => {
            res.status(404).json({error: 'path does not exist'})
        })
        return this.router
    }
}
module.exports = Router