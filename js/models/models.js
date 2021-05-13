import { books } from '../data/books.js';
import { uniqid } from '../utils/uniqid.js';

const Books = {
    createBook(
        {
            title,
            year,
            read,
        }
    ){     
       const newBook = {
            id : uniqid(),
            title,
            year,
            read,
        }
        books.push(newBook);
        console.log(books)
        return true;
    },
}

export{ Books };