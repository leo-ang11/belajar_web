
document.addEventListener("DOMContentLoaded", loadTask());
function addTask() {
    let input = document.getElementById('add-task');
    let task = input.value.trim();
    console.log('input >>', task);
    input.value = '';
    if(task ===''){
        alert('Please enter a task');
        return;
    }

    let containerTask = document.getElementById('showTask');
    let li = document.createElement('li');
    li.innerHTML = `<span onclick="completeTask(this)">${task}</span><button type="button" onclick="deleteTask(this)">X</button>`;
    containerTask.appendChild(li);
}

function deleteTask(button) {
    button.parentElement.remove();
}

function completeTask(task) {
    task.classList.toggle('completed');
    updateTask(task);
    console.log("selesai");
}

function saveTask(taskText) {
    let tasks = getTaskFromStorage();
    tasks.push({text: taskText, completed: false});
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getTaskFromStorage() {
    let tasks = localStorage.getItem('tasks');
    try {
        tasks = JSON.parse(tasks) || [];
    } catch (error) {
        console.log(error);
    }
}

function loadTask() {
    let tasks = getTaskFromStorage();
    tasks.forEach((task) => {
        let li = createElement('li');
        li.innerHTML = `<span onclick="completeTask(this)">${task.text}</span><button type="button" onclick="deleteTask(this)">X</button>`;
        document.getElementById('showTask').appendChild(li);
    });
}

function updateTask(taskText) {
    let tasks = getTaskFromStorage();
    tasks.forEach((task) => {
        if (task.text === taskText.innerHTML) {
            task.completed = !task.completed;
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}