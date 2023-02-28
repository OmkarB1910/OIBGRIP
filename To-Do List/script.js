const taskForm = document.querySelector("#task-form");
const taskList = document.querySelector("#task-list");
const completedTasksList = document.querySelector("#completed-tasks-list");
let tasks = [];

function addTask(event) {
  event.preventDefault();
  const newTaskInput = document.querySelector("#new-task");
  const newTask = newTaskInput.value.trim();
  if (newTask === "") return;
  tasks.push({ name: newTask, completed: false });
  renderTasks();
  newTaskInput.value = "";
}

function completeTask(event) {
  const index = event.target.dataset.index;
  tasks[index].completed = true;
  renderTasks();
}

function deleteTask(event) {
  const index = event.target.dataset.index;
  tasks.splice(index, 1);
  renderTasks();
}

function renderTasks() {
  taskList.innerHTML = "";
  completedTasksList.innerHTML = "";
  tasks.forEach((task, index) => {
    const taskItem = document.createElement("li");
    const taskName = document.createElement("span");
    const deleteButton = document.createElement("button");
    const completeButton = document.createElement("button");

    taskName.classList.add("task");
    taskName.textContent = task.name;

    deleteButton.classList.add("delete");
    deleteButton.textContent = "Delete";
    deleteButton.dataset.index = index;

    completeButton.classList.add("complete");
    completeButton.textContent = "Complete";
    completeButton.dataset.index = index;

    taskItem.appendChild(taskName);
    taskItem.appendChild(deleteButton);

    if (task.completed) {
      completedTasksList.appendChild(taskItem);
    } else {
      taskItem.appendChild(completeButton);
      taskList.appendChild(taskItem);
    }

    deleteButton.addEventListener("click", deleteTask);
    completeButton.addEventListener("click", completeTask);
  });
}

taskForm.addEventListener("submit", addTask);
