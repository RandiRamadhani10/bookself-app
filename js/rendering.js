import { books } from "./data/books.js";
import { Books } from "./models/models.js"
import { Partials } from "./views/partials.js";
const isCompleted = document.querySelector('#isCompleted');
const notCompleted = document.querySelector('#notCompleted');

const Rendering = {
    renderList(){
            let completedBooks = books.filter((book)=>{
                return book.isComplete;      
            });
            
            console.log(completedBooks);
            let completeList = "";
            isCompleted.innerHTML = completeList;
            completedBooks.forEach(book => {
                    completeList += Partials.booksRenderIsComplete(book);
                    isCompleted.innerHTML = completeList;
            });

            let uncompletedBooks = books.filter((book)=>{
                return !book.isComplete;    
            });
            console.log(uncompletedBooks);
            let uncompleteList = "";
            notCompleted.innerHTML = uncompleteList;
            uncompletedBooks.forEach(book => {
                uncompleteList += Partials.booksRenderNotComplete(book);
                notCompleted.innerHTML = uncompleteList;
            });
    },
    renderButton(){
        const buttons = document.querySelectorAll('#buttons');
        buttons.forEach((button)=>{
           button.addEventListener("click", function(){
                let btn = this.dataset.idbook;
                console.log(btn);
                Books.updateIsComplete(btn);
                Rendering.renderList();
           });
        });
    }
}

export { Rendering };
