import deleteModule from './delete.js'
import checkedModule from './checked.js'

export default function(name, date){
    const tasks = document.querySelector('.tasks');
    const task = document.createElement('div');
    task.classList.add('task-item');
    task.innerHTML =`<div class="task"><div class="checkbox"></div><div class="name"> ${name}</div> <div class="date">${date}</div> <div class="delete"><i>✖</i></div></div>`;
    tasks.appendChild(task);
    deleteModule();
    checkedModule();
}