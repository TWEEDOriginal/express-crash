import express from 'express'
import {cb0, cb1, cb2} from '../controllers/index.js'
const router = express.Router();


router.get('/', [cb0, cb1, cb2])


export default router;
