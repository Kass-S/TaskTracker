import { saveToStorage, getFromStorage, removeFromStorage } from "./localSorage.js";

let taskNameInput = document.getElementById('taskNameInput');
let taskDescriptionInput = document.getElementById('taskDescriptionInput');
let dueDateInput = document.getElementById('dueDateInput');

let priorityStatusBtn = document.getElementById('priorityStatusBtn');
let lowPriorityBtn = document.getElementById('lowPriorityBtn');
let mediumPriorityBtn = document.getElementById('mediumPriorityBtn');
let highPriorityBtn = document.getElementById('highPriorityBtn');

let addTaskBtn = document.getElementById('addTaskBtn');

let toDoStatus = document.getElementById('toDoStatus');

let priorityStatus = 'Low'

const GetTaskList = () => {
    let taskList = getFromStorage();

    taskList.map(task => {

        let cardDiv = document.createElement('div');
        cardDiv.className = "max-w-sm p-6 bg-amber-50 border border-gray-200 rounded-lg shadow-sm mt-5 m-5";

        let cardH5 = document.createElement('h5');
        cardH5.className = "mb-2 text-2xl font-bold tracking-tight";
        cardH5.innerText = `${task.taskName}`;

        let cardP = document.createElement('p');
        cardP.className = "mb-3 font-normal text-gray-700";
        cardP.innerText = `${task.taskDescription}`;

        let cardPrirityP = document.createElement('p');
        cardPrirityP.className = "mb-3 font-normal text-gray-700";
        cardPrirityP.innerText = `Priority: ${task.priorityStatus}`;

        let removeBtn = document.createElement('button');
        removeBtn.className = 'bg-red-500 inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-lg  hover:bg-red-500 hover:cursor-pointer';
        removeBtn.innerText = 'Delete';

        let editBtn = document.createElement('button');
        editBtn.className = "inline-flex items-center ml-4 px-5 py-2 text-sm font-medium text-center rounded-lg bg-green-500 hover:bg-green-600";
        editBtn.innerText = "Edit";

        removeBtn.addEventListener('click', () => {
            removeFromStorage(task);
            cardDiv.remove();
        })

        cardDiv.appendChild(cardH5);
        cardDiv.appendChild(cardP);
        cardDiv.appendChild(cardPrirityP);
        cardDiv.appendChild(removeBtn);
        cardDiv.appendChild(editBtn);

        toDoStatus.appendChild(cardDiv);
    })
}
GetTaskList();

addTaskBtn.addEventListener('click', () => {
    toDoStatus.innerHTML = '';

    let taskName = taskNameInput.value;
    let taskDescription = taskDescriptionInput.value;
    let dueDate = dueDateInput.value;

    let wholeTask = {taskName, taskDescription, dueDate, priorityStatus};
    saveToStorage(wholeTask);

    GetTaskList();
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