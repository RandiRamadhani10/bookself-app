import { Books } from "./models/models.js";
import { Rendering } from "./dom.js";


const form = document.querySelector("#form");

form.addEventListener("submit", (event)=>{
    event.preventDefault();
        const title = document.querySelector("#title");
        const year = document.querySelector("#year");
        const author = document.querySelector("#author");
        const isComplete = document.querySelector("#isComplete");
        
        
        Books.createBook({
            title: title.value,
            author: author.value,
            year: year.value,
            isComplete: isComplete.checked,
        });
        Rendering.renderList();
});