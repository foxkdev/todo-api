const getTasksResponseBuilder = require('./get-tasks-response-builder')
class GetTasks{
    constructor() {

    }
    async getTasks() {
        // obtener parametros de request si se necesitan
        // consultar los tasks a dominio
        return getTasksResponseBuilder({items: []})
    }
}
module.exports = GetTasks;