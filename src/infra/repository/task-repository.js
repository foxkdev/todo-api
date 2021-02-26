const Task = require('../../domain/task/task')
class TaskRepository {
    constructor({db}) {
        this.db = db
    }
    async findAll() {
        const tasks = await this.db.Task.findAll()
        return tasks.map((val) => {
            return this.toDomain(val)
        })
    }
    async findById(id) {
        const task = await this.db.Task.findByPk(id)
        return this.toDomain(task)
    }
    toDomain(document) {
        const { id, title, description, status } = document
        const task = Task.build({id, title, description, status})
        return task
    }
}
module.exports = TaskRepository