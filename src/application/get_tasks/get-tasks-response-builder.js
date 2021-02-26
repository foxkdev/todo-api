module.exports = ({tasks}) => {
    const items = []
    tasks.forEach((task) => {
        const {id, title, description, status} = task
        items.push({
            id,
            title,
            description,
            status
        })
    })
    return items
}