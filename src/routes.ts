// src/routes.ts

import express from 'express'
import { categoriesController } from './controllers/categoriesController'
import { coursesController } from './controllers/coursesController'
import { authController } from './controllers/authController'


const router = express.Router()

router.post('/auth/register', authController.register)

router.get('/categories', categoriesController.index)
router.get('/courses/featured', coursesController.featured)
router.get('/courses/search', coursesController.search)
router.get('/courses/newest', coursesController.newest)
router.get('/categories/:id', categoriesController.show)
router.get('/courses/:id', coursesController.show)

export { router }