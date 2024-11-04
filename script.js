document.getElementById("addTaskButton").addEventListener("click", addTask);

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Por favor, adicione uma tarefa.");
        return;
    }

    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");
    li.innerHTML = `
        <span>${taskText} - ${new Date().toLocaleDateString()}</span>
        <button onclick="markAsCompleted(this)">Concluir</button>
        <button onclick="editTask(this)">Editar</button>
        <button onclick="removeTask(this)">Remover</button>
    `;
    taskList.appendChild(li);
    taskInput.value = ""; 
}

function markAsCompleted(button) {
    const li = button.parentNode;
    li.classList.toggle("completed");
    const completionDate = new Date().toLocaleDateString();
    
    if (li.classList.contains("completed")) {
        li.innerHTML = `
            <span>${li.firstChild.textContent} - Concluída em: ${completionDate}</span>
            <button onclick="markAsCompleted(this)">Desmarcar</button>
            <button onclick="editTask(this)">Editar</button>
            <button onclick="removeTask(this)">Remover</button>
        `;
    } else {
        li.innerHTML = `
            <span>${li.firstChild.textContent.split(' - ')[0]} - ${new Date().toLocaleDateString()}</span>
            <button onclick="markAsCompleted(this)">Concluir</button>
            <button onclick="editTask(this)">Editar</button>
            <button onclick="removeTask(this)">Remover</button>
        `;
    }
}

function editTask(button) {
    const li = button.parentNode;
    const span = li.querySelector('span');
    const taskText = span.textContent.split(' - ')[0];
    
    const newTask = prompt("Edite a tarefa:", taskText);
    
    if (newTask !== null && newTask.trim() !== "") {
        span.innerHTML = `${newTask} - ${new Date().toLocaleDateString()}`;
    }
}

function removeTask(button) {
    const li = button.parentNode;
    li.remove();
}
