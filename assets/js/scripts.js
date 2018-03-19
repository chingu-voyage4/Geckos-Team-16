//Create variables for the mainContainer and addListInput 
var mainContainer = document.querySelector(".main-container");
var addListInput = document.querySelector(".add-list-input");

//When the user clicks any key on the keyboard run the addList function
addListInput.addEventListener("keypress", addList);

function addList(){

  //If the user presses the enter key run the following code
  if(event.which === 13){
    
    //Create a new div element
    var newList = document.createElement("div");

    //Add html code to the new div element
    newList.innerHTML = "<div class='listContainer'><h1 class='listTitle'>" + addListInput.value + "</h1><input class='task-input' type='text' placeholder='Add a task...'></div>";

  }
}