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
    updateIsComplete(data){
        const index = books.findIndex((book) => book.id === data );
        console.log(books[index]);
        if(books[index].isComplete){
            books[index] = {
                ...books[index],
                isComplete: false,
            }
        }else{
            books[index] = {
                ...books[index],
                isComplete: true,
            }
        } 
    },
    deleteBook(data){

    }
}

export{ Books };