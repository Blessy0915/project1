const express = require('express')
const router = express.Router()

const projectController = require('../app/controllers/project')
const employeeController = require('../app/controllers/employee')
const logController = require('../app/controllers/Log')


router.get('/projects', projectController.list)
router.post('/projects', projectController.create)

router.get('/employees', employeeController.list)
router.post('/employees', employeeController.create)
router.delete('/employees/:id' , employeeController.delete)

router.get('/logs', logController.list)
router.post('/logs', logController.create)


module.exports = router