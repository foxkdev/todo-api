const getTasksResponseBuilder = require('./get-tasks-response-builder')
class GetTasks{
    constructor({ dbHandler }) {
        this.dbHandler = dbHandler

    }
    async getTasks() {
        // obtener parametros de request si se necesitan
        // consultar los tasks a dominio
        this.instance = await this.dbHandler.getInstance()
        return getTasksResponseBuilder({items: []})
    }
}
module.exports = GetTasks;