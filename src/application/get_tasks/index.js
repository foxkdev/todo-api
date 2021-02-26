
class GetTasks {
    constructor({taskRepository}) {
        this.taskRepository = taskRepository
    }
    async getTasks(){
        const tasks = await this.taskRepository.findAll()
        return tasks
    }
}
module.exports = GetTasks