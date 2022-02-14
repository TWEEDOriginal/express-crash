import express from 'express'
import indexRouter from './index.js'
import usersRouter from './users.js'

const custom_logger = (req, res, next)=> {
  console.log(req.originalUrl)
  next()
}

const router = express.Router();
router.use(custom_logger);

router.use('/', indexRouter);
router.use('/users', usersRouter);


export default router;
