// When the user enters in text into the text area and then clicks the create button, create a new card element in the DOM. You decide the height/width of the card.
// When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually removed from the DOM.
// 
var createBtn = document.getElementById("create-btn");
var cardArea = document.getElementById("card-holder");
var userCard = document.getElementById("card");
var textArea = document.getElementById("user-input");

createBtn.addEventListener("click", function buildCard(){
console.log("click");

  var output = '<div class= "card"><section><p class = "text">' + textArea.value + '</p></section><input type = "button" class= "delete" value = "delete"></div>';
    cardArea.innerHTML += output
    deleteBtnEventListener();

});

var deleteBtn = document.getElementById("delete");
var create =  document.getElementById("create");
var deleteCard = document.getElementsByClassName("delete");
// var container = document.getElementById("container");
var input = document.getElementById("input");
var card = document.getElementsByClassName("card"); //array like object
var text = document.getElementsByClassName("text");

// create.addEventListener("click", createCard );


// function createCard(){
//   var output = '<div class = "card"><section><p class = "text">' + input.value + '</p></section><input type = "button" class = "delete" value = "delete"></div>'
//     container.innerHTML += output
//     deleteBtnEventListener();
// }

//target the parent card and instruct to remove child with each click of each delete button//////
function removeCard(event){
var thisCard = event.target.parentElement;
cardArea.removeChild(thisCard)  ////used node.removeChild method as the card is i.e container is the child of the div or the create card function
}
////made event listener on each dynamically created delete button
function deleteBtnEventListener(){
  for(var i = 0; i < deleteCard.length; i++){
    var del = document.getElementsByClassName("delete")
      for(var d = 0; d < del.length; d++){
        del[d].addEventListener("click", removeCard);
      }
  }
  console.log(del);
}