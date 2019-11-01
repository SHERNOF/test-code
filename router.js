const express = require('express')
const router = express.Router()
const mainController = require('./controllers/mainContoller')


router.get('/',  mainController.home)
router.post('/register', mainController.register)
router.post('/register', mainController.downtime, mainController.register)


module.exports = router