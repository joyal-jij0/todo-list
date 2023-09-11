import addTask from "./addTask";

export default function(){
    let textInput = document.createElement("input");
    textInput.type = "text";
    textInput.id = "textInput";
    textInput.placeholder = "Add Task";

    let dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.id = "dateInput";
    dateInput.placeholder ="Add deadline";

    let submitButton = document.createElement("button");
    submitButton.id = "submit";
    submitButton.innerHTML= `Submit`;

    let cancelButton = document.createElement("button");
    cancelButton.innerHTML = `Cancel`;
    cancelButton.id = "cancel";
    cancelButton.addEventListener('click', cancelForm);

    const addToDo = document.createElement("div");
    addToDo.classList.add("addToDo");

    addToDo.appendChild(textInput);
    addToDo.appendChild(dateInput);
    addToDo.appendChild(submitButton);
    addToDo.appendChild(cancelButton);


    function cancelForm(){
        addToDo.remove();
        submitButton.removeEventListener('click',handleSubmit);
        cancelButton.removeEventListener('click', cancelForm);
    }

    function handleSubmit(){
        const task1 = new Task(document.getElementById("textInput").value, document.getElementById("dateInput").value);
        addTask(task1.name, task1.date);
        submitButton.removeEventListener('click',handleSubmit);
        cancelButton.removeEventListener('click', cancelForm);
        addToDo.remove();
    }

    cancelButton.addEventListener('click',cancelForm);

    submitButton.addEventListener("click", handleSubmit);

    const tasks = document.querySelector(".tasks");
    tasks.appendChild(addToDo);


    function Task(name, date){
        this.name = name;
        this.date = date;
    }



}