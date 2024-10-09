var todoList = document.getElementById("todo-list");
var input = document.getElementById("input-field");
var h3 = document.getElementById("h3")
function addEntry() {
    var entry = document.createElement("li");
    h3.remove()
    if (input.value !== "") {
        entry.innerHTML = input.value + " " + "<button onclick='deleteEntry(event)'>-</button>";
        todoList.append(entry);
        clearField();
    } else {
        input.classList.add("vibrate");
        setTimeout(() => {
            input.classList.remove("vibrate");
        }, 300);
        alert("Enter a task to add to the list.");
    }
}

function deleteEntry(event) { // Function to delete the entry
    var entry = event.target.parentElement;
    entry.classList.add("removing");
    setTimeout(() => {
        entry.remove();
    }, 1000); // Match the duration of the animation
}

function clearField() { // Function to clear the input field value after appending it
    input.value = "";
}

// Add event listener for Enter key
input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addEntry();
        clearField();
    }
});