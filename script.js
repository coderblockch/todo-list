
const taskInput = document.getElementById("task-input");                                                         
  const addBtn = document.getElementById("add-btn");                                                               
  const taskList = document.getElementById("task-list");                                                           
                                                                                                                   
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];                                                     
   
  function saveTasks() {                                                                                           
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach(function (task, index) {                                                                         
      const li = document.createElement("li");
      if (task.completed) {                                                                                        
        li.classList.add("completed");
      }

      const span = document.createElement("span");                                                                 
      span.textContent = task.text;
      span.addEventListener("click", function () {                                                                 
        tasks[index].completed = !tasks[index].completed;
        saveTasks();
        renderTasks();                                                                                             
      });
                                                                                                                   
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Eliminar";
      deleteBtn.classList.add("delete-btn");
      deleteBtn.addEventListener("click", function () {
        tasks.splice(index, 1);                                                                                    
        saveTasks();
        renderTasks();                                                                                             
      });         

      li.appendChild(span);
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
    });
  }

  function addTask() {                                                                                             
    const text = taskInput.value.trim();
    if (text === "") return;                                                                                       
                  
    tasks.push({ text: text, completed: false });
    taskInput.value = "";
    saveTasks();
    renderTasks();
  }                                                                                                                
   
  addBtn.addEventListener("click", addTask);                                                                       
                  
  taskInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") addTask();
  });

  renderTasks();   