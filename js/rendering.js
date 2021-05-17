import { books } from "./data/books.js";
import { Books } from "./models/models.js"
import { Partials } from "./views/partials.js";
const isCompleted = document.querySelector('#isCompleted');
const notCompleted = document.querySelector('#notCompleted');

const Rendering = {
    async renderList(){
            const start = ()=>{
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
            }
            await start();
            Rendering.renderButton();
    },
    renderButton(){
        const buttonsDelete = document.querySelectorAll('.iconDelete')
        const buttons = document.querySelectorAll('.buttons');
        buttons.forEach((button)=>{
           button.addEventListener("click", async function(){
                let btn = this.dataset.idbook;
                console.log(btn);
                await Books.updateIsComplete(btn);
                Rendering.renderList();
           });
        });
        buttonsDelete.forEach((button)=>{
            button.addEventListener("click", async function(event){
                event.preventDefault();
                let confirms = confirm("Apakah anda yakin?");      
                if(confirms ==true){
                    let btn = this.dataset.idbook;
                console.log(btn);
                await Books.deleteBook(btn);
                Rendering.renderList();
                }else Rendering.renderList();
           });
        });
    },
    searchByName(data){
        const filteredBooks = books.filter((book)=>{
           return book.title == data;
        })
        if(filteredBooks.length == 0){
            alert(`${data} tidak Ditemukan!`);
        }else{
            this.renderListSearch(filteredBooks);
        }
    },
    async renderListSearch(data){
        const start = ()=>{
            let completedBooks = data.filter((book)=>{
                return book.isComplete;      
            });
            console.log(completedBooks);
            let completeList = "";
            isCompleted.innerHTML = completeList;
            completedBooks.forEach(book => {
                    completeList += Partials.booksRenderIsComplete(book);
                    isCompleted.innerHTML = completeList;
            });
            let uncompletedBooks = data.filter((book)=>{
                return !book.isComplete;    
            });
            console.log(uncompletedBooks);
            let uncompleteList = "";
            notCompleted.innerHTML = uncompleteList;
            uncompletedBooks.forEach(book => {
                uncompleteList += Partials.booksRenderNotComplete(book);
                notCompleted.innerHTML = uncompleteList;
            });
        }
        await start();
        Rendering.renderButton();
    }
}

export { Rendering };
