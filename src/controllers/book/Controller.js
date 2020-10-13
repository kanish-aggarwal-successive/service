import Book from './../../model.js'


class Controller {

    // To Get All Product

    getBooks = async (req, res) => {
        try {
            const book = await Book.find({});
            res.json({ books: book });
        } catch (err) {
            res.json({ error: 'Something went wrong' });
        }
    }


    // Get Single Product

    getBookById = async (req, res) => {
        const bookId = req.params.id;
        const book = await Book.findById(bookId);

        if (book) {
            res.json({ book: book });
        } else {
            res.json({ message: 'Book not found' })
        }
    }
}

export default Controller;
