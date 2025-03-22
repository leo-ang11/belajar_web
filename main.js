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
    console.log("selesai");
}