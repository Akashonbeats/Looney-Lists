var todoList = document.getElementById("todo-list");
var input = document.getElementById("input-field");
var h3 = document.getElementById("h3");

// Loading saved todos from local storage
window.onload = function() {
    var savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    if (savedTodos.length > 0) {
        h3.remove();
    }
    savedTodos.forEach(function(todo) {
        var entry = document.createElement("li");
        entry.innerHTML = todo + " <button onclick='deleteEntry(event)'>-</button>";
        todoList.append(entry);
    });
};

function addEntry() {
    var entry = document.createElement("li");
    h3.remove();
    if (input.value !== "") {
        entry.innerHTML = input.value + " <button onclick='deleteEntry(event)'>-</button>";
        todoList.append(entry);
        saveTodos();
        clearField();
    } else {
        input.classList.add("vibrate");
        setTimeout(() => {
            input.classList.remove("vibrate");
        }, 300);
        alert("Enter a task to add to the list.");
    }
}

function deleteEntry(event) {
    var entry = event.target.parentElement;
    entry.classList.add("removing");
    setTimeout(() => {
        entry.remove();
        saveTodos();
    }, 1000); // Match the duration of the animation
}

function clearField() {
    input.value = "";
}

function saveTodos() {
    var todos = [];
    todoList.querySelectorAll("li").forEach(function(entry) {
        todos.push(entry.textContent.replace(" -", ""));
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}

// Add event listener for Enter key
input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addEntry();
    }
});