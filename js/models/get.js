import { Books } from "./models.js";
import { uniqid } from "../utils/uniqid.js";
const Gets = {
    addBook(){
        const title = document.querySelector("#title");
        const year = document.querySelector("#year");
        const read = document.querySelector("#read");
       
        const id = uniqid(); 
        const book = {
            title: title.value,
            year: year.value,
            read: read.checked,
            id: id,
        }
        Books.createBook(book);
    }
}

export { Gets };