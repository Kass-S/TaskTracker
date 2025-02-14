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

const removeFromStorage = (task) => {
    let localStorageData = getFromStorage();
    console.log(task);
    
    let taskIndex = localStorageData.findIndex(t => t.taskId === task.taskId);
    console.log(taskIndex);

    localStorageData.splice(taskIndex, 1);

    localStorage.setItem('Task', JSON.stringify(localStorageData));
}

export { saveToStorage, getFromStorage, removeFromStorage}