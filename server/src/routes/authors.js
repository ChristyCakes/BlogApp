import { Router } from 'express';
import Table from '../table';
import StoredProcedure from '../storedprocedure';
let router = Router();
import { tokenMiddleware, isLoggedIn } from '../middleware/auth.mw';

let authors = new Table('authors');
let spByAuthor = new StoredProcedure('spByAuthor');


// router.get('/me', tokenMiddleware, isLoggedIn, (req, res) => {
//     res.json(req.author);
// });

router.get('/:id?', (req, res) => {
    let id = req.params.id;
    if (id) {
        spByAuthor.call(id)
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
    authors.insert(req.body)
        .then(results => {
            res.json(results)
        }).catch((e) => {
            console.log(e);
            res.sendStatus(500)
        })
})

export default router;