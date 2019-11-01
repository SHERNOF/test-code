const express = require('express')
const test = express()
const router = require('./router')


test.set('views', 'views')
test.set('view engine', 'ejs')

test.use(express.urlencoded({extended: false}))
test.use(express.json())

test.use(express.static('public'))
test.use('/', router)


test.listen(3000)

module.exports = test