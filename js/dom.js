import { books } from "./data/books.js";
import { Partials } from "./views/domTemplate.js";
const isComplete = document.querySelector('#isComplete');
const notComplete = document.querySelector('#notComplete');

const Rendering = {
    renderList(){
        let list = "";
            books.forEach(book => {
                list += Partials.booksRender(book);
                isComplete.innerHTML = list;
            });
    }
}

export { Rendering };
