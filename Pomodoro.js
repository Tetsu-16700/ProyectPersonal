const tasks = [];
let time = 0;
let timer = null;
let timerBreack = null;
let current = null;

const bAdd = document.querySelector("#bAdd");
const itTask = document.querySelector("#itTask");
const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (itTask.value !== "") {
    createTrask(itTask.value);
    itTask.value = "";
    renderTasks();
  }
});

function createTrask(value) {
  const newTask = {
    id: (Math.random() * 100).toString(36).slice(3),
    title: value,
    completed: false,
  };

  tasks.unshift(newTask);
}
function renderTasks() {
  const html = tasks.map((task) => {
    return `
    <div class="task">
        <div class="completed">${
          task.completed
            ? `<span class="done">Done</span>`
            : `<button class="start_Button" data-id="${task.id}">Start</button>`
        }</div>
        <div class="title">${task.title}</div>
    </div>
    `;
  });

  const tasksContainer = document.querySelector("#tasks");
  tasksContainer.innerHTML = html.join("");

  const startButtons = document.querySelectorAll(".task . start_Button");

  startButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        if(!timer){
            const id= button.getAttribute('data-id');
            startButtonsHandler(id);
            button.textContent = 'In Progess...';
        }
    });
  });
}

function startButtonsHandler(id){
    time =  25 * 60;
    current = id;
    const taskIndex = tasks.findIndex(task => task.id === id);
    const taskName = document.querySelector('#time #taskName');
    taskName.textContent = tasks[taskIndex].title;
}