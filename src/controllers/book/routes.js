import express from 'express';
import bookController from './Controller.js'

const bookControl = new bookController;

const router = express.Router();

router.route('/getBooks')
    .get(bookControl.getBooks)
    .post(bookControl.addBook);

router.route('/getBook/:id')
    .get(bookControl.getBookById)
    .delete(bookControl.deleteBook);

router.route('/edit/:id')
    .put(bookControl.updateBookById);

export default router;