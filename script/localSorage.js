const saveToStorage = (task) => {
    let taskArr = getFromStorage();

    if(!taskArr.includes(task)){
        taskArr.push(task);
    }
    localStorage.setItem('SavedName', JSON.stringify(taskArr));
}

const getFromStorage = () => {
    let localStorageData = localStorage.getItem('SavedName');

    if(localStorageData == null){
        return [];
    }
    return JSON.parse(localStorageData);
}

const removeFromStorage = (task) => {
    let localStorageData = getFromStorage();
    let taskIndex = localStorageData.indexOf(task);

    localStorageData.splice(taskIndex, 1);

    localStorage.setItem('SavedName', JSON.stringify(localStorageData));
}

export { saveToStorage, getFromStorage, removeFromStorage}