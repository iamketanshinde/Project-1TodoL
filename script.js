// scripts.js

let tasks = [];

function addTask() {
    const taskText = document.getElementById('taskInput').value.trim();
    if (!taskText) return;

    tasks.push({ task: taskText, completed: false });
    document.getElementById('taskInput').value = '';
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = tasks.map((task, index) => `
        <tr>
            <td>${index + 1}</td>
            <td id="task-${index}" class="${task.completed ? 'completed' : ''}">${task.task}</td>
            <td>
                <button class="btn btn-sm btn-primary mr-1" onclick="editTask(${index})">Edit</button>
                <button class="btn btn-sm btn-success mr-1" onclick="completeTask(${index})">Complete</button>
                <button class="btn btn-sm btn-danger" onclick="deleteTask(${index})">Delete</button>
            </td>
        </tr>
    `).join('');
}

function editTask(index) {
    const newTask = prompt('Enter a new task:', tasks[index].task);
    if (newTask !== null) {
        tasks[index].task = newTask.trim();
        renderTasks();
    }
}

function completeTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

renderTasks();
