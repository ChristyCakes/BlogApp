import { Router } from 'express';
import authorsRouter from './authors';
import blogsRouter from './blogs'
import authRouter from './auth';
import usersRouter from './users';
import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw';

let router = Router();

router.use('/auth', authRouter);

router.route('*')
    .put(tokenMiddleware, isLoggedIn)
    .delete(tokenMiddleware, isLoggedIn);

router.use('/authors', authorsRouter);
router.use('/blogs', blogsRouter)
router.use('/users', usersRouter)

export default router;