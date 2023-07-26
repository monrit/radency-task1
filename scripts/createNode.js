import { archive, deleteNode } from "./initialData.js";

const PROPERTIES = ["name", "created", "category", "content", "dates", "ACTIONS"];
const BUTTONS = ["Edit", "Arch", "Del"];

const openEditForm = (id, name, category, content) => {
    const modal = document.getElementById("my-modal");
    const form = document.querySelector("form");
    const submitButton = document.getElementById("form-submit-button");

    form.value = id;
    submitButton.value = "Save";
    modal.style.display = "block";
    
    document.querySelector('#name').value = name;
    document.querySelector('#category').value = category;
    document.querySelector('#content').value = content;
};

const createButtons = data => {
    const div = document.createElement("div");

    for (let button of BUTTONS) {
        const actionButton = document.createElement("button");
        if (button === "Del") {
            actionButton.addEventListener("click", () => deleteNode(data.id)); //memory leak
        } else if (button === "Arch") {
            actionButton.addEventListener("click", () => archive(data.id)); //memory leak
        } else {
            actionButton.addEventListener("click", () =>
                openEditForm(data.id, data.name, data.category, data.content)
            ); //memory leak
        }
        actionButton.innerText = button;
        div.appendChild(actionButton);
    }

    return div;
};

export const createNode = data => {
    const tr = document.createElement("tr");
    tr.id = data.id;

    for (let prop of PROPERTIES) {
        const td = document.createElement("td");
        if (prop !== "ACTIONS") {
            td.innerText = data[prop];
        } else {
            td.appendChild(createButtons(data));
        }
        tr.appendChild(td);
    }
    return tr;
};
