import { renderTable } from "./renderTable.js";

export let initialData = [
    {
        id: 0,
        name: "Ощадбанк Лес",
        created: "27/06/2023",
        category: "Task",
        content: "Налаштуй цьоці ощадбанк",
        dates: [],
        isArchived: false,
    },
    {
        id: 1,
        name: "Inet",
        created: "05/07/2023",
        category: "Task",
        content: "Поповни інтернет",
        dates: [],
        isArchived: false,
    },
    {
        id: 2,
        name: "Вася шльопанець винен бензу",
        created: "20/07/2023",
        category: "Task",
        content: "2 літри",
        dates: [],
        isArchived: false,
    },
    {
        id: 3,
        name: "З Орестом на квас",
        created: "21/07/2023",
        category: "Task",
        content: "Домовитися з Орестом про похід в бар на квас",
        dates: [],
        isArchived: false,
    },
    {
        id: 4,
        name: "Андрій зовсім здурів",
        created: "22/07/2023",
        category: "Random Thought",
        content: "Раніше десь до 21/11/2022 він був нормальним хлопом, але приблизно 16/06/2023 здурів...",
        dates: ["21/11/2022", "16/06/2023"],
        isArchived: false,
    },
    {
        id: 5,
        name: "Дедлайн тестового",
        created: "23/07/2023",
        category: "Random Thought",
        content: "Потрібно зробити тестове до 07/08/2023",
        dates: ["07/08/2023"],
        isArchived: false,
    },
    {
        id: 6,
        name: "Написати Віці",
        created: "24/07/2023",
        category: "Idea",
        content: "Як на рахунок написати Віці?",
        dates: [],
        isArchived: false,
    },
];

export const deleteNode = id => {
    initialData = initialData.filter(note => note.id !== id);
    renderTable(initialData);
};

export const addNode = noteObj => {
    noteObj.id = initialData[initialData.length - 1].id + 1;
    noteObj.isArchived = false;
    initialData.push(noteObj);
    renderTable(initialData);
};

export const archive = id => {
    initialData = initialData.map(note => {
        if (note.id === id) {
            note.isArchived = true;
            return note;
        } else {
            return note;
        }
    });
    renderTable(initialData);
};
