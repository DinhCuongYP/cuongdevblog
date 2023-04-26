const express = require('express')
const router = express.Router()
const courseControllers = require('../app/controllers/CourseControllers')

router.get('/create', courseControllers.create)
router.post('/store', courseControllers.store)
router.get('/:id/me', courseControllers.edit)
router.put('/:id', courseControllers.update)
router.get('/:slug', courseControllers.show)

module.exports = router
