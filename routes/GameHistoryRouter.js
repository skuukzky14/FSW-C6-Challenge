const express = require('express')
const router = express.Router()
const { adminCheck } = require('../middlewares/adminAuth')
const { renderDashboard,postResult, deleteHistory } = require('../controller/GameHistoryController')

router.get('/dashboard', adminCheck , renderDashboard)
router.post('/postresult', postResult)
router.get('/deletehistory/:_id', adminCheck, deleteHistory)

module.exports = router