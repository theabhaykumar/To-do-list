// Assigning variables to elements we want to work with.
var button = document.getElementById("addtask");
var input = document.getElementById("typehere");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");

// Making functions to refactor the code to be cleaner and understable.
function inputLength() {
  // Function for finding the length of value put by the user in the input field.
  return input.value.length;
}

function removeParent(event) {
  //function to remove the item in the list
  event.target.parentNode.remove();
}

function createListElement() {
  // Function to add the input as a list
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";

  // Creating the delete button.
  var button = document.createElement("button");
  button.appendChild(document.createTextNode("Delete!"));
  li.appendChild(button);
  button.onclick = removeParent;
}

button.addEventListener("click", function () {
  // We are adding an event where the values are entered when we click on the button
  if (inputLength() > 0) {
    // Doing this so that an empty li doesn't get created.
    createListElement();
  }
});

input.addEventListener("keypress", function (event) {
  // We are doing this to make values get entered when we press "enter" key
  if (inputLength() > 0 && event.keyCode === 13) {
    // The javascript keycode of "enter" is 13. We can also use event.which instead of event.keyCode
    createListElement();
  }
});

ul.addEventListener("click", function (event) {
  //using this to strike through the items we added wjem we click them
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("done");
  }
});
