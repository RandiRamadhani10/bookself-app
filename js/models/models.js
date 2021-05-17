import { books } from '../data/books.js';
import { uniqid } from '../utils/uniqid.js';
import { STORAGE_KEY } from '../index.js'

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
        this.saveData();
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
            this.saveData();
        }else{
            books[index] = {
                ...books[index],
                isComplete: true,
            }
            this.saveData();
        } 
    },
    deleteBook(data){
        console.log("hai");
        const index = books.findIndex((book) => book.id === data );
        console.log(books[index]);
        books.splice(index, 1);
        this.saveData(); 
    },
    saveData(){
        const parsed= JSON.stringify(books);
        localStorage.setItem(STORAGE_KEY, parsed);
    }
}

export{ Books };