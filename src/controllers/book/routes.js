import express from 'express';

const router = express.Router();

router.route('/')
    .get(function (req, res, next) {
        res.json(req.book)
    })

router.route('/')
    .put(function (req, res, next) {
        
        req.book.name = req.params.name
        // save book 
        res.json(req.book)
    })

router.route('/')
    .post(function (req, res, next) {
        next(new Error('not implemented'))
    })

router.route('/')
    .delete(function (req, res, next) {
        next(new Error('not implemented'))
    })

export default router;