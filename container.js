const awilix = require('awilix')
const dbHandler = require('./infraestructure/persistence/pg/db-handler')
const getTasks = require('./application/get_tasks')
// Create the container and set the injectionMode to PROXY (which is also the default).
const container = awilix.createContainer({
    injectionMode: awilix.InjectionMode.PROXY
})

container.register({
    getTasks: awilix.asClass(getTasks),
    dbHandler: awilix.asClass(dbHandler).singleton(),
})

module.exports = container