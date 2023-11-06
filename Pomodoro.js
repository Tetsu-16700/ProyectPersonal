const tasks = [];
let time = 0;
let timer = null;
let timerBreack = null;
let current = null;

const bAss = document.querySelector("#bAdd");
const idTask = document.querySelector("#idTask");
const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (idTask.value !== "") {
    createTrask(idTask.value);
    idTask.value = "";
    renderTask();
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
function renderTask() {
  const html = tasks.map((task) => {
    return `
    <div class="task">
        <div class="completed"></div>
        <div class="title"></div>
        
    </div>
    `;
  });
}
