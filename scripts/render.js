import { createNode, createStatsNode } from "./createNodes.js";

const CATEGORIES = ["Task", "Random Thought", "Idea"];

const renderStatsTable = initialData => {
    const statsTable = document.getElementById("stats-table");
    statsTable.innerHTML = "";
    
    for (let i = 0; i < CATEGORIES.length; i++) {
        statsTable.appendChild(createStatsNode(CATEGORIES[i], initialData));
    }
};

export const renderTable = initialData => {
    const notesList = document.getElementById("notes-list");
    const switchListButton = document.getElementById("switch-list-button");
    const switchButtonValue = switchListButton.value === "true" ? true : false;
    notesList.innerHTML = "";

    for (let i = 0; i < initialData.length; i++) {
        if (initialData[i].isArchived === switchButtonValue) {
            notesList.appendChild(createNode(initialData[i], switchButtonValue));
        }
    }
    renderStatsTable(initialData);
};

export const openEditForm = (id, name, category, content) => {
    const modal = document.getElementById("my-modal");
    const form = document.querySelector("form");
    const submitButton = document.getElementById("form-submit-button");

    form.value = id;
    submitButton.value = "Save";
    modal.style.display = "block";

    document.querySelector("#name").value = name;
    document.querySelector("#category").value = category;
    document.querySelector("#content").value = content;
};
