
const userInput = document.getElementById("userInput");
const button = document.getElementById("create-button");
const ul = document.querySelector("ul");
const li = document.querySelector("li");


function createListItem(){
console.log(userInput.value);
const item = document.createElement("li")
item.innerHTML = userInput.value;
ul.appendChild(item)
//resets userInput
userInput.value = "";
}

button.addEventListener("click", createListItem);


