
const userInput = document.getElementById("userInput");
const button = document.getElementById("create-button");
const ul = document.querySelector("ul");
const li = document.querySelector("li");


function createListItem(){
console.log(userInput.value);
const item = document.createElement("li")
item.innerHTML = userInput.value + `<i class="far fa-times-circle"></i>`;
ul.appendChild(item)
//resets userInput
userInput.value = "";


function markAsDone(){
   item.classList.toggle("done");
}

  item.addEventListener("click",markAsDone);



function deleteItem(){

}



}


button.addEventListener("click", createListItem);

