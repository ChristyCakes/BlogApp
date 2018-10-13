import { Router } from 'express';
import Table from '../table'
let router = Router();

let authors = new Table('authors')

router.get('/', (req, res) => {
    authors.getAll()
    .then(authors => {
        res.json(authors)
    })
});

export default router;