const express = require('express')
const router = express.Router()
const questionRouter = require('./Question')
/* const answerRouter = require('./')
const commentRouter = require('./') */

router.get('/', (req, res) => {
    res.send('Welcome to stack clone api')
})

router.use('/question', questionRouter)

module.exports = router;