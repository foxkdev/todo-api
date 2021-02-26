const createTaskResponseBuilder = require('./create-task-response-builder.js')
const Task = require('../../domain/task/task')
class CreateTask {
    constructor({taskRepository}) {
        this.taskRepository = taskRepository
    }
    async create(commandBuilder) {
        const {title, description ,status} = commandBuilder
        const createdAt = new Date()
        const updatedAt = createdAt
        const task = new Task({title, description, status, createdAt, updatedAt})
        const taskResponse = await this.taskRepository.create(task)
        return createTaskResponseBuilder({task: taskResponse})

    }
}

module.exports = CreateTask