import { Books } from "./models/models.js";
import { Rendering } from "./rendering.js";
import {books} from "./data/books.js";
const button = document.querySelector("#notReaded");
const form = document.querySelector("#form");



    form.addEventListener("submit", async (event)=>{
        event.preventDefault();
            const title = document.querySelector("#title");
            const year = document.querySelector("#year");
            const author = document.querySelector("#author");
            const isComplete = document.querySelector("#isComplete");
            
            
            await Books.createBook({
                title: title.value,
                author: author.value,
                year: year.value,
                isComplete: isComplete.checked,
            });
            await Rendering.renderList();
            Rendering.renderButton();
            
    }); 


