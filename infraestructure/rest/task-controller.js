const express = require('express')
const router = express.Router()
const container = require('../../container')
const getTasks = container.resolve('getTasks')
router.get('/', async (req, res, next) => {
    const getTasksResponse = await getTasks.getTasks()
    res.json(getTasksResponse)
})

module.exports = router

