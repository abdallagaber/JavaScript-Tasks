const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");
addButton.addEventListener("click", () => {
  const taskText = todoInput.value.trim();
  if (taskText !== "") {
    const listItem = document.createElement("li");
    const deleteButton = document.createElement("button");
    const doneButton = document.createElement("button");
    const taskSpan = document.createElement("span");

    taskSpan.textContent = taskText;
    taskSpan.style.marginRight = "10px";
    listItem.appendChild(taskSpan);

    doneButton.textContent = "Done";
    doneButton.addEventListener("click", () => {
      listItem.style.textDecoration = "line-through";
    });
    listItem.appendChild(doneButton);

    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      todoList.removeChild(listItem);
    });
    listItem.appendChild(deleteButton);

    todoList.appendChild(listItem);
    todoInput.value = "";
  }
});

todoInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addButton.click();
  }
});
