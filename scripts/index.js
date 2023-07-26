import { addNode, editeNode, initialData } from "./initialData.js";
import { renderTable } from "./renderTable.js";

const modal = document.getElementById("my-modal");
const closeModal = document.getElementById("close-modal");
const addNoteButton = document.getElementById("add-note-button");
const submitButton = document.getElementById("form-submit-button");
const form = document.querySelector("form");

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

addNoteButton.addEventListener("click", () => {
    form.value = "NEW";
    submitButton.value = "Add note";
    modal.style.display = "block";
});

window.addEventListener("click", event => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

form.addEventListener("submit", event => {
    event.preventDefault();

    const name = document.querySelector('#name');
    const category = document.querySelector('#category');
    const content = document.querySelector('#content');

    if (form.value === "NEW") {
        addNode(name.value, category.value, content.value);
    } else {
        editeNode(form.value, name.value, category.value, content.value);
    }

    name.value = "";
    category.value = "Task";
    content.value = "";
    modal.style.display = "none";
});

renderTable(initialData);
