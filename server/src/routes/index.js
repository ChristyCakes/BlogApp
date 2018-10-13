import { Router } from 'express';
import authorsRouter from './authors';
import blogsRouter from './blogs'

let router = Router();

router.use('/authors', authorsRouter);
router.use('/blogs', blogsRouter)

export default router;