import { Router } from 'express';
import Table from '../table';
import StoredProcedure from '../storedprocedure';
let router = Router();
import { generateHash } from '../utils/security'

let authors = new Table('authors');
let spByAuthor = new StoredProcedure('spByAuthor');

router.get('/:id?', (req, res) => {
    let id = req.params.id;
    if (id) {
        spByAuthor.call([id])
            .then(authorblog => {
                res.json(authorblog)
            }).catch((e) => {
                console.log(e);
                res.sendStatus(500);
            });
    } else {
        authors.getAll()
            .then(authors => {
                res.json(authors)
            })
            .catch((e) => {
                console.log(e);
                res.sendStatus(500)
            })
    }
});

router.post('/', (req, res) => {
    generateHash(req.body.password)
        .then(hash => {
            authors.insert({
                name: req.body.name,
                email: req.body.email,
                hash: hash
            }).then(results => {
                res.json(results)
            }).catch((e) => {
                console.log(e);
                res.sendStatus(500)
            })
        })
})

export default router;