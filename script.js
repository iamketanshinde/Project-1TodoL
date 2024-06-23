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
function addTask(){
    const taskInput= document.getElementById('taskInput').Value.trim();
    if(!taskInput)return;
    tasks.push({task:taskInput,complete:false});
    document.getElementById('taskInput').value='';
    renderTasks();
}
function editTask(index){
const newTask= prompt('Enter a task:');
    if(newTask!==null){
        tasks[index].task=newTask.trim();
        renderTasks();``
    }
}
function completeTask(index){
    tasks[index].complete=!tasks[index].complete;
    renderTasks();
}