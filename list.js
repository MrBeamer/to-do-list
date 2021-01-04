
// Getting html elements to manipulate
const userInput = document.getElementById("userInput");
const button = document.getElementById("create-button");
const ul = document.querySelector("ul");


//Getting the length of the userinput
function inputLength(){
  return userInput.value.length;
}

//Creating new to-do-list li elements
function createListItem(){
const item = document.createElement("li")
// Injection userinput into li element
item.innerHTML = userInput.value;
//Appeding li element below ul element
ul.appendChild(item)
//resets userInput to empty string
userInput.value = "";


//Toggle effect to mark to dos as done
function markAsDone(){
   item.classList.toggle("done");
}

item.addEventListener("click",markAsDone);


//Creating button to delete li elements
  const deleteButton = document.createElement("button");
  deleteButton.appendChild(document.createTextNode(`X`));
  item.appendChild(deleteButton);
  deleteButton.addEventListener("click", deleteListItem);

//Makes it possible to delete li elements with the button
  function deleteListItem() {
    item.remove();
  }
}

//Checks if the input is empty or not
function emptyCheck() {
  if (inputLength() > 0) {
    createListItem()
  } else {
    alert('Texfield cant be blank!');
  }
}

//Starts the magic
button.addEventListener("click", emptyCheck);

