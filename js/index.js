import { Gets } from "./models/get.js"
import { uniqid } from "./utils/uniqid.js";
const form = document.querySelector("#form");

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    Gets.addBook();
})