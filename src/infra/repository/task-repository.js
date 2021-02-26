class TaskRepository {
    constructor({db}) {
        this.db = db
    }
    async findAll() {
        return await this.db.Task.findAll()
    }
}
module.exports = TaskRepository