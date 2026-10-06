
function addTask() {
    var input = document.getElementById("taskInput");
    var text = input.value;


    if (text.trim() == "") {
        alert("Please enter a task!");
        return;
    }

    var ul = document.getElementById("taskList");
    var li = document.createElement("li");

    li.innerHTML = "<span>" + text + "</span><button class='del-btn' onclick='deleteTask(this)'>Delete</button>";

    ul.appendChild(li);


    input.value = "";
}


function deleteTask(btn) {
    var li = btn.parentElement;
    li.remove();
}


document.getElementById("taskInput").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});