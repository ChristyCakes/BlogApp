import { Router } from 'express';
import Table from '../table'
let router = Router();

let blogs = new Table('blogs')

router.get('/:id?', (req, res) => {
    let id = req.params.id;
    if (id) {
        blogs.getOne(id)
            .then(blog => {
                res.json(blog)
            })
            .catch((e) => {             // do I need this catch or is last one enough?
                console.log(e);
                res.sendStatus(500)
            })
    } else {
        blogs.getAll()
            .then(blogs => {
                res.json(blogs)
            })
            .catch((e) => {
                console.log(e);
                res.sendStatus(500)
            })
    }
});

export default router;