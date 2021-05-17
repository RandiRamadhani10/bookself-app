import { Books } from "./models/models.js";
import { Rendering } from "./rendering.js";

const form = document.querySelector("#form");
const buttonAdd = document.querySelector(".iconAdd");
const back = document.querySelector(".back");
const formPopup = document.querySelector(".form");
const buttonClose = document.querySelector(".iconClose");

buttonClose.addEventListener("click",(event)=>{
    event.preventDefault();
    hidden();

})
buttonAdd.addEventListener("click",(event)=>{
    event.preventDefault();
    show();

});


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
            Rendering.renderList();
            hidden();
            // Rendering.renderButton();   
}); 

function hidden(){
    back.style.display = "none";
    formPopup.style.display = "none";

}
function show(){
    back.style.display = "flex";
    formPopup.style.display = "flex";

}


