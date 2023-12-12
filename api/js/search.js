import "../css/style.css"

DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    const search = `https://api.algobook.info/v1/dogs/search/:search`}


/* 

let buttons = document.querySelectorAll(".china, .japan, .mexico, .india, .italy")

// for each button we add anevent listener
buttons.forEach((btn)=> btn.addEventListener("click", function(){
    //get value/text content of button to be compared later
    let type = btn.textContent.toLowerCase()
    //filter the main array by the type of cuisine
    let newArr = categories.filter((category) => category.cuisine === type)
    clearfields()
    //pass filtered array into insertcards to put on screen
   insertCards(newArr)
})) */