const express = require('express')

const container = require('../../container')
const getTasks = container.resolve('getTasks')

const router = express.Router()

router.get('/', async (req, res, next) => {
    const getTasksResponse = await getTasks.getTasks()
    res.json({items: getTasksResponse})
})


module.exports = router