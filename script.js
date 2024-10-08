var todoList = document.getElementById("todo-list")
    var input = document.getElementById("input-field")
    console.log(todoList)

    function addEntry(){
        var entry = document.createElement("li")
        if (input.value !== "") {
            entry.innerHTML = input.value + " " + "<button onclick='deleteEntry(event)'>-</button>";
            todoList.append(entry);
        }
        else{
            alert("Enter a task to add to the list.")
        }
    }


    function deleteEntry(event){ //Fucntion to delete the entry
        event.target.parentElement.remove()
    }

    function clearField(){ //Function to clear the input field value after appending it
        input.value=""
    }