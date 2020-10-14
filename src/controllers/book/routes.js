import express from 'express';
import bookController from './Controller.js'

const bookControl = new bookController;

const router = express.Router();

router.route('/getBooks')
    .get(bookControl.getBooks);

router.route('/getBook/:id')
    .get(bookControl.getBookById);

export default router;