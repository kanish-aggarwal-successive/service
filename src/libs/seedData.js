import fs from 'fs';
import Book from '../model.js';

export const importData = async () => {
    const booksBuffer = fs.readFileSync('src/_seedData/books.json');
    const booksJSON = booksBuffer.toString();
    const booksData = JSON.parse(booksJSON);
    try {
        await Book.create(booksData);
    } catch (err) {
        console.log(err);
    }
}
