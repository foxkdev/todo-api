const awilix = require('awilix')
const server = require('./server')
const router = require('./router')

const { createContainer, asClass, asFunction } = awilix

const container = createContainer()

container.register({
    server: asClass(server).singleton(),
    router: asClass(router).singleton()
})

module.exports = container