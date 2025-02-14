import { saveToStorage, getFromStorage, removeFromStorage, updateTaskInStorage } from "./localSorage.js";

let taskNameInput = document.getElementById('taskNameInput');
let taskDescriptionInput = document.getElementById('taskDescriptionInput');
let dueDateInput = document.getElementById('dueDateInput');

let priorityStatusBtn = document.getElementById('priorityStatusBtn');
let lowPriorityBtn = document.getElementById('lowPriorityBtn');
let mediumPriorityBtn = document.getElementById('mediumPriorityBtn');
let highPriorityBtn = document.getElementById('highPriorityBtn');

let addTaskBtn = document.getElementById('addTaskBtn');

let toDoStatus = document.getElementById('toDoStatus');
let inProgressStatus = document.getElementById('inProgressStatus');
let completedStatus = document.getElementById('completedStatus');

let priorityStatus = 'Low'

const GetTaskList = () => {
    toDoStatus.innerHTML = '';
    inProgressStatus.innerHTML = '';
    completedStatus.innerHTML = '';

    let taskList = getFromStorage();

    taskList.map(task => {

        let cardDiv = document.createElement('div');
        cardDiv.className = "max-w-sm p-6 bg-amber-50 border border-gray-200 rounded-lg shadow-sm m-2  ";

        let cardH5 = document.createElement('h5');
        cardH5.className = "mb-2 mx-20 text-2xl font-bold tracking-tight";
        cardH5.innerText = `${task.taskName}`;

        let cardP = document.createElement('p');
        cardP.className = "mb-3 font-normal text-lg text-gray-700";
        cardP.innerText = `${task.taskDescription}`;

        let cardPrirityP = document.createElement('p');
        cardPrirityP.className = "mb-3 font-normal text-sm text-gray-700";
        cardPrirityP.innerText = `Priority: ${task.priorityStatus}`;

        let cardDueDateP = document.createElement('p');
        cardDueDateP.className = "mb-3 font-normal text-sm text-gray-700";
        cardDueDateP.innerText = `Due Date: ${task.dueDate}`;

        let removeBtn = document.createElement('button');
        removeBtn.className = 'bg-red-500 inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-lg hover:bg-red-400 hover:cursor-pointer';
        removeBtn.innerText = 'Delete';

        let editBtn = document.createElement('button');
        editBtn.className = "inline-flex items-center ml-4 px-5 py-2 text-sm font-medium text-center rounded-lg bg-green-500 hover:bg-green-400 hover:cursor-pointer";
        editBtn.innerText = "Edit";

        let moveBtn = document.createElement('button');
        moveBtn.className = "inline-flex items-center ml-4 px-2 py-2 text-sm font-medium text-center rounded-lg bg-green-500 hover:bg-green-400 hover:cursor-pointer";

        if(task.taskStatus == "To Do"){
            moveBtn.innerText = "Progress";
            toDoStatus.appendChild(cardDiv);

        }else if(task.taskStatus == "In Progress"){
            moveBtn.innerText = "Complete";
            inProgressStatus.appendChild(cardDiv);

        }else if(task.taskStatus == "Completed"){
            moveBtn.innerText = "";
            completedStatus.appendChild(cardDiv);
        }

        removeBtn.addEventListener('click', () => {
            removeFromStorage(task);
            cardDiv.remove();
        })

        editBtn.addEventListener('click', () => {
            //add functionality
        })

        cardDiv.appendChild(cardH5);
        cardDiv.appendChild(cardP);
        cardDiv.appendChild(cardPrirityP);
        cardDiv.appendChild(cardDueDateP);
        cardDiv.appendChild(removeBtn);
        cardDiv.appendChild(editBtn);
        cardDiv.appendChild(moveBtn);

        moveBtn.addEventListener('click', () => {
            if(moveBtn.innerText == "Progress"){
                task.taskStatus = "In Progress";
                moveBtn.innerText = "Complete";
                
                inProgressStatus.appendChild(cardDiv);

            }else if(moveBtn.innerText == "Complete"){
                task.taskStatus = "Completed";  

                completedStatus.appendChild(cardDiv);
            }
            updateTaskInStorage(task); 
        })

    })
}
GetTaskList();

addTaskBtn.addEventListener('click', () => {
    toDoStatus.innerHTML = '';
    inProgressStatus.innerHTML = '';
    completedStatus.innerHTML = '';

    let taskName = taskNameInput.value;
    let taskDescription = taskDescriptionInput.value;
    let dueDate = dueDateInput.value;
    let taskStatus = 'To Do';

    let dataTask = getFromStorage();
    let taskId = 0;

    if(dataTask.length == 0){
        taskId = 1;
    }else{
        taskId = dataTask[dataTask.length - 1].taskId + 1;
    }

    let wholeTask = {taskId, taskName, taskDescription, dueDate, priorityStatus, taskStatus};
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