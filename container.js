const awilix = require('awilix')
const getTasks = require('./application/get_tasks')
// Create the container and set the injectionMode to PROXY (which is also the default).
const container = awilix.createContainer({
    injectionMode: awilix.InjectionMode.PROXY
})

container.register({
    getTasks: awilix.asClass(getTasks)
})

module.exports = container