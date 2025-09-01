


const inputBox = document.getElementById("input-box");

const listContainer = document.getElementById("list-container")


function addTask() {
  if (inputBox.value === "") {
    alert("Write an task to add");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
  }

  inputBox.value = "";
}
