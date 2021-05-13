import { books } from "./data/books.js";
import { Partials } from "./views/domTemplate.js";
const isCompleted = document.querySelector('#isCompleted');
const notCompleted = document.querySelector('#notCompleted');

const Rendering = {
    renderList(){
        let list = "";
            const filterBooks = books.filter((book)=>{
                book.isComplete;
                return true;  
            });
            console.log(filterBooks);
            filterBooks.forEach(book => {
                    list += Partials.booksRenderIsComplete(book);
                    isCompleted.innerHTML = list;
            });
            // if(book.isComplete == false){
            //     list += Partials.booksRenderNotComplete(book);
            //     notCompleted.innerHTML = list;
            // }
    }
}

export { Rendering };
