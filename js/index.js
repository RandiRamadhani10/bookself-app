import { Books } from "./models/models.js";
import { uniqid } from "./utils/uniqid.js";
import { Rendering } from "./dom.js";


const form = document.querySelector("#form");

form.addEventListener("submit", (event)=>{
    event.preventDefault();
        const title = document.querySelector("#title");
        const year = document.querySelector("#year");
        const read = document.querySelector("#read");

        
        Books.createBook({
            title: title.value,
            year: year.value,
            read: read.checked,
        });
        Rendering.renderList();
});