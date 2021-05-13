import { books } from '../data/books.js';
import { uniqid } from '../utils/uniqid.js';

const Books = {
    createBook(
        {
            title,
            author,
            year,
            isComplete,
        }
    ){     
       const newBook = {
            id : uniqid(),
            title,
            author,
            year,
            isComplete,
        }
        books.push(newBook);
        console.log(books)
        return true;
    },
}

export{ Books };