const saveToStorage = (task) => {
    let taskArr = getFromStorage();

    if(!taskArr.includes(task)){
        taskArr.push(task);
    }
    localStorage.setItem('Task', JSON.stringify(taskArr));
}

const getFromStorage = () => {
    let localStorageData = localStorage.getItem('Task');

    if(localStorageData == null){
        return [];
    }
    return JSON.parse(localStorageData);
}

const updateTaskInStorage = (updatedTask) => {
    let taskList = getFromStorage();

    let updatedTaskList = taskList.map(task => {
        if (task.taskId == updatedTask.taskId) {
            console.log(updatedTask)
            task = updatedTask;
        }
        return task;
    });
    console.log(updatedTaskList)
    localStorage.setItem('Task', JSON.stringify(updatedTaskList));
}


const removeFromStorage = (task) => {
    let localStorageData = getFromStorage();
    console.log(task);
    
    let taskIndex = localStorageData.findIndex(t => t.taskId == task.taskId);
    console.log(taskIndex);

    localStorageData.splice(taskIndex, 1);

    localStorage.setItem('Task', JSON.stringify(localStorageData));
}

export { saveToStorage, getFromStorage, removeFromStorage, updateTaskInStorage}