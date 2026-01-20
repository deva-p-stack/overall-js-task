import './style.css'


let taskcard = document.querySelectorAll ('.task-card'); 
let inputsearch = document.querySelector('#inputsearch');

inputsearch.addEventListener("input",function(){

let inputvalue = inputsearch.value.toLowerCase();

taskcard.forEach((cards) => {
    let title = cards.dataset.cardTitle.toLowerCase();

    if(title.includes(inputvalue)){
       cards.style.display = "flex"; 
    }
    else{
         cards.style.display = "none";
    }



});



})
