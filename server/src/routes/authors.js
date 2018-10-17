import { Router } from 'express';
import Table from '../table'
let router = Router();

let authors = new Table('authors')

router.get('/', (req, res) => {
    authors.getAll()
    .then(authors => {
        res.json(authors)
    })
    .catch((e) => {
        console.log(e);
        res.sendStatus(500)
    })
});

router.post('/', (req, res) => {
    authors.insert(req.body)
    .then(results => {
        res.json(results)      
    }).catch((e) => {
        console.log(e);
        res.sendStatus(500)
    })
})

export default router;