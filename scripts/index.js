import { initialData } from "./initialData.js";
import { renderTable } from "./renderTable.js";

const modal = document.getElementById("my-modal");
const closeModal = document.getElementById("close-modal");
const addNoteButton = document.getElementById("add-note-button");

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

addNoteButton.addEventListener("click", () => {
    modal.style.display = "block";
});

window.addEventListener("click", event => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

const form = document.querySelector("form");

form.addEventListener("submit", event => {
    event.preventDefault();
    const name = document.querySelector('#name');
    const category = document.querySelector('#category');
    const content = document.querySelector('#content');

    console.log(name, category, content);
    name.value = "";
    category.value = "Task";
    content.value = "";
    modal.style.display = "none";
});

renderTable(initialData);
