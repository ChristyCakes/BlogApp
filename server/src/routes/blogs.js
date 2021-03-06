import { Router } from 'express';
import Table from '../table'
import StoredProcedure from '../storedprocedure';
import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw';
let router = Router();

let blogs = new Table('blogs');
let spAuthorBlog = new StoredProcedure('spAuthorBlog');

router.get('/:id?', (req, res) => {
    let id = req.params.id;
    if (id) {
        blogs.getOne(id)
            .then(blog => {
                res.json(blog)
            }).catch((e) => {             
                console.log(e);
                res.sendStatus(500);
            });
    } else {
        blogs.getAll()
            .then(blogs => {
                res.json(blogs)
            }).catch((e) => {
                console.log(e);
                res.sendStatus(500)
            })
    }
});

router.post('/', tokenMiddleware, isLoggedIn, (req, res) => {
    let blog = req.body;
    let blogid = ""
    blogs.insert(blog)
        .then((id) => {
            blogid = id.id
            spAuthorBlog.call([blog.author, blogid])})
        .then(() => {
            res.send({blogid: blogid})
        })
        .catch((e) => {
            console.log(e);
            res.sendStatus(500)
        })
})

router.delete('/:id', (req, res) => {
    let id = req.params.id
    blogs.delete(id)
        .then(results => {
            res.json(results)
        }).catch(e => {
            console.log(e)
            res.sendStatus(500)
        })
})

router.put('/:id', (req, res) => {
    let id = req.params.id
    let blog = req.body;
    blogs.update(id, blog)
        .then(results => {
            res.json(results)
        })
        .catch((e) => {
            console.log(e);
            res.sendStatus(500)
        })
})

router.delete('/:id', (req, res) => {
    let id = req.params.id
    blogs.delete(id)
        .then(results => {
            res.json(results)
        }).catch(e => {
            console.log(e)
            res.sendStatus(500)
        })
})

export default router;