import { saveToStorage, getFromStorage, removeFromStorage } from "./localSorage.js";

let taskNameInput = document.getElementById('taskNameInput');
let taskDescriptionInput = document.getElementById('taskDescriptionInput');
let dueDateInput = document.getElementById('dueDateInput');

let lowPriorityBtn = document.getElementById('lowPriorityBtn');
let mediumPriorityBtn = document.getElementById('mediumPriorityBtn');
let highPriorityBtn = document.getElementById('highPriorityBtn');

