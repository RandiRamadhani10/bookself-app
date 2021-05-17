import { Books } from "./models/models.js";
import { Rendering } from "./rendering.js";
import { books } from "./data/books.js"

const STORAGE_KEY = "books";
const form = document.querySelector("#form");
const buttonAdd = document.querySelector(".iconAdd");
const back = document.querySelector(".back");
const formPopup = document.querySelector(".formPopup");
const buttonClose = document.querySelector(".iconClose");
const seacrhBar = document.querySelector(".searchBar");

window.addEventListener("load", ()=>{
    if(storageExist()){
        loadDataFromStorage();
    }
});

buttonClose.addEventListener("click",(event)=>{
    event.preventDefault();
    hidden();
});

buttonAdd.addEventListener("click",(event)=>{
    event.preventDefault();
    show();
});

seacrhBar.addEventListener("submit",(event)=>{
    event.preventDefault();
    const title = document.querySelector("#titleSearch");
    const dataSearch = title.value;
    Rendering.searchByName(dataSearch);
})

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
}); 

function hidden(){
    back.style.display = "none";
    formPopup.style.display = "none";
    return true;
}
function show(){
    back.style.display = "flex";
    formPopup.style.display = "flex";
    return true;
}
function storageExist(){
    
    if(typeof(Storage) === undefined){
        alert("Browser kamu tidak mendukung local storage");
        return false
    } 
    console.log("Sss")
    return true;
    
}
function loadDataFromStorage(){
    const dataStorage = localStorage.getItem(STORAGE_KEY);
    console.log(dataStorage)
    let data = JSON.parse(dataStorage);
    
    let bookStorage = []; 
    bookStorage = data;
    bookStorage.forEach(book => {
        books.push(book);
    });
    Rendering.renderList();
}

export { STORAGE_KEY };
