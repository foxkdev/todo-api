const getTaskResponseBuilder = require('./get-task-response-builder')
class GetTask {
    constructor({taskRepository}) {
        this.taskRepository = taskRepository
    }
    async getTask(commandBuilder) {
        const {taskId} = commandBuilder
        const {id, title, description, status } = await this.taskRepository.findById(taskId)
        return getTaskResponseBuilder({id, title, description, status})
    }
}
module.exports = GetTask