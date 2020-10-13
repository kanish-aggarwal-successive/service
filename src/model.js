import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    id: {
        type: String
    },
    author: {
        type: String
    },
    country: {
        type: String
    },
    imageLink: {
        type: String
    },
    language: {
        type: String
    },
    link: {
        type: String
    },
    pages: {
        type: Number
    },
    title: {
        type: String
    },
    year: {
        type: Number
    },
});

const book = mongoose.model("book", bookSchema, "book-store");

export default book;