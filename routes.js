import express from 'express'
import {auth} from './validator.js'
import {insertdata} from './controller.js'
export const router = express.Router()
router.use(express.json())

//routes
router.post('/auth',auth)
router.post('/insertdata',insertdata)