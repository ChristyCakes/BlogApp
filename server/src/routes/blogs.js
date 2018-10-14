import { Router } from 'express';
import Table from '../table'
let router = Router();

let blogs = new Table('blogs')

router.get('/', (req, res) => {
    blogs.getAll()
    .then(blogs => {
        res.json(blogs)
    })
    .catch((e) => {
        console.log(e);
        res.sendStatus(500)
    })
});

export default router;