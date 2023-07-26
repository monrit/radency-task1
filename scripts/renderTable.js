import { createNode } from "./createNode.js";

export const renderTable = (initialData) => {
    const notesList = document.getElementById("notes-list");
    notesList.innerHTML = "";
    for (let i = 0; i < initialData.length; i++) {
        if (initialData[i].isArchived === false) {
            notesList.appendChild(createNode(initialData[i]));
        }
    }
};
