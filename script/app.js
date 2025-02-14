import { saveToStorage, getFromStorage, removeFromStorage } from "./localSorage.js";

let taskNameInput = document.getElementById('taskNameInput');
let taskDescriptionInput = document.getElementById('taskDescriptionInput');
let dueDateInput = document.getElementById('dueDateInput');

let priorityStatusBtn = document.getElementById('priorityStatusBtn');
let lowPriorityBtn = document.getElementById('lowPriorityBtn');
let mediumPriorityBtn = document.getElementById('mediumPriorityBtn');
let highPriorityBtn = document.getElementById('highPriorityBtn');

let addTaskBtn = document.getElementById('addTaskBtn');

let priorityStatus = 'Low'

addTaskBtn.addEventListener('click', () => {
    let taskName = taskNameInput.value;
    let taskDescriptionn = taskDescriptionInput.value;
    let dueDate = dueDateInput.value;

    let wholeTask = {taskName, taskDescriptionn, dueDate, priorityStatus};
    saveToStorage(wholeTask);

    taskNameInput.value = '';
    taskDescriptionInput.value = '';
    dueDateInput.value = '';
    priorityStatus = 'Low';
    priorityStatusBtn.innerText = 'Priority Status';
})

lowPriorityBtn.addEventListener('click', () => {
    priorityStatus = 'Low';
    priorityStatusBtn.innerHTML = 'Low <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/></svg>';
})

mediumPriorityBtn.addEventListener('click', () => {
    priorityStatus = 'Medium';
    priorityStatusBtn.innerHTML = 'Medium  <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/></svg>';
})

highPriorityBtn.addEventListener('click', () => {
    priorityStatus = 'High';
    priorityStatusBtn.innerHTML = 'High  <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/></svg>';
})