import { archive, deleteNode } from "./initialData.js";

const PROPERTIES = ["name", "created", "category", "content", "dates", "ACTIONS"];
const BUTTONS = ["Edit", "Arch", "Del"];

export const createNode = (data) => {
    const tr = document.createElement("tr");
    tr.id = data.id;
    for (let i of PROPERTIES) {
        const td = document.createElement("td");
        if (i !== "ACTIONS") {
            td.innerText = data[i];
        } else {
            for (let i of BUTTONS) {
                const actionButton = document.createElement("button");
                if (i === "Del") {
                    actionButton.addEventListener("click", () => deleteNode(data.id)); //memory leak
                } else if (i === "Arch") {
                    actionButton.addEventListener("click", () => archive(data.id)); //memory leak
                }
                actionButton.innerText = i;
                td.appendChild(actionButton);
            }
        }
        tr.appendChild(td);
    }
    return tr;
};