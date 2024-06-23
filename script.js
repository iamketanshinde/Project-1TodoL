let tasks = [];
function renderTasks(){
    const taskList = document.getElementById('taskList');
    taskList.innerHTML=tasks.map((task,index)=>`
    <tr>
        <td>${index+1}</td>
        <td style:"text-decoration:${task.complete?'line-through':'none'}">${task.task}</td>
        <td>
            <button class="btn btn-primary mr-1" onclick="editTask(${index})">Edit</button>
            <button class="btn btn-secondary mr-1" onclick="completeTask(${index})">Complete</button>
            <button  class="btn btn-waring" onclick="deleteTask(${index})">Delete</button>
        </td>
    <tr>
    `).join();
}