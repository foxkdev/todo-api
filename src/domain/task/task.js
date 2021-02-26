const Domain = require('../domain')
class Task extends Domain{
    constructor({id, title, description, status}) {
        super({requireds: ['id', 'title', 'status']})
        this.id = id
        this.title = title
        this.description = description
        this.status = status
    }
    static build({id, title, description, status}) {
        const task = new Task({id,title, description, status})
        return task
    }

}
module.exports = Task