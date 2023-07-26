import { archive, deleteNode } from "./initialData.js";
import { openEditForm } from "./render.js";

const PROPERTIES = ["name", "created", "category", "content", "dates", "ACTIONS"];
const BUTTONS = ["Edit", "Arch", "Del"];

const createButtons = (data, switchButtonValue) => {
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
        actionButton.innerText = switchButtonValue && button === "Arch" ? "Unarchive": button;
        div.appendChild(actionButton);
    }

    return div;
};

export const createNode = (data, switchButtonValue) => {
    const tr = document.createElement("tr");
    tr.id = data.id;

    for (let prop of PROPERTIES) {
        const td = document.createElement("td");
        if (prop !== "ACTIONS") {
            td.innerText = data[prop];
        } else {
            td.appendChild(createButtons(data, switchButtonValue));
        }
        tr.appendChild(td);
    }
    return tr;
};

const countByCategory = (initialData, category, isArchived) => {
    return initialData.reduce((accum, value) => {
        if (value.category === category && value.isArchived === isArchived) {
            return accum + 1;
        } else {
            return accum;
        }
    }, 0);
};

export const createStatsNode = (category, initialData) => {
    const tr = document.createElement("tr");
    for (let i = 0; i < 3; i++) {
        const td = document.createElement("td");
        if (i === 0) {
            td.innerText = category;
        } else if (i === 1) {
            td.innerText = countByCategory(initialData, category, false);
        } else {
            td.innerText = countByCategory(initialData, category, true);
        }
        tr.appendChild(td);
    }
    return tr;
};
