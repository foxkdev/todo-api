
class Task {
    constructor({ id, title, description, status, createdAt, updatedAt}) {
        this.id = id
        this.title = title
        this.description = description
        this.status = status
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }
}
module.exports = Task