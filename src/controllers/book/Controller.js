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
            res.json(book);
        } else {
            res.json({ message: 'Book not found' })
        }
    }


    // To update by Id

    // updateBookById = (req, res) => {   
    //     Book.findOneAndUpdate({
    //         id: req.body.id,
    //         country: req.body.country
    //     }).then(book => {
    //         res.json(book)
    //     });
    // }

    updateBookById = async (req, res) => {
        const book = await Book.findOneAndUpdate(req.body);

        if (book) {
            res.json(book)
        } else {
            res.json({ message: 'Book not found' })
        }
    }


    // To create a book

    addBook = async (req, res) => {

        // Request Validation
        if (!req.body) {
            return res.status(400).send({
                message: "Book content cannot be empty"
            });
        }

        const book = await Book.create(req.body);

        // Save book
        book.save()
            .then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "Something wrong while creating the book."
                });
            });
    }


    // To delete a book

    deleteBook = (req, res) => {

        Book.findByIdAndDelete(req.params.id)
            .then(data => {
                if (!data) {
                    return res.status(404).send({
                        message: "user not found with id " + req.params.id
                    });
                }
                res.send({ message: "Book deleted successfully!" });
            }).catch(err => {
                if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                    return res.status(404).send({
                        message: "user not found with id " + req.params.id
                    });
                }
                return res.status(500).send({
                    message: "Could not delete book with id " + req.params.id
                });
            });
    }

}

export default Controller;
