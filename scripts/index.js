import { addNode, editeNode, initialData } from "./initialData.js";
import { renderTable } from "./render.js";

const modal = document.getElementById("my-modal");
const closeModal = document.getElementById("close-modal");
const addNoteButton = document.getElementById("add-note-button");
const submitButton = document.getElementById("form-submit-button");
const switchListButton = document.getElementById("switch-list-button");
const form = document.querySelector("form");

const closeModalFunction = () => {
    const name = document.querySelector("#name");
    const category = document.querySelector("#category");
    const content = document.querySelector("#content");
    name.value = "";
    category.value = "Task";
    content.value = "";
    modal.style.display = "none";
};

closeModal.addEventListener("click", closeModalFunction);

addNoteButton.addEventListener("click", () => {
    form.value = "NEW";
    submitButton.value = "Add note";
    modal.style.display = "block";
});

window.addEventListener("click", event => {
    if (event.target === modal) {
        closeModalFunction();
    }
});

form.addEventListener("submit", event => {
    event.preventDefault();

    const name = document.querySelector("#name");
    const category = document.querySelector("#category");
    const content = document.querySelector("#content");

    if (form.value === "NEW") {
        addNode(name.value, category.value, content.value);
    } else {
        editeNode(form.value, name.value, category.value, content.value);
    }

    closeModalFunction();
});

switchListButton.addEventListener("click", () => {
    if (switchListButton.value === "true") {
        switchListButton.classList.remove("btn-secondary");
        switchListButton.classList.add("btn-outline-secondary");
        switchListButton.value = "false";
    } else {
        switchListButton.classList.remove("btn-outline-secondary");
        switchListButton.classList.add("btn-secondary");
        switchListButton.value = "true";
    }
    renderTable(initialData);
});

renderTable(initialData);
