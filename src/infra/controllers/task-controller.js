const express = require('express')

const container = require('../../container')
const getTasks = container.resolve('getTasks')
const getTask = container.resolve('getTask')
const getTaskCommandBuilder = require('../../application/get_task/get-task-command-builder')
const router = express.Router()

router.get('/:taskId', async (req, res, next) => {
    const {taskId} = req.params
    const getTaskCommand = getTaskCommandBuilder({taskId})
    const getTaskResponse = await getTask.getTask(getTaskCommand)
    res.json(getTaskResponse)
})

router.get('/', async (req, res, next) => {
    const getTasksResponse = await getTasks.getTasks()
    res.json({items: getTasksResponse})
})




module.exports = router