import './style.css'





document.addEventListener('DOMContentLoaded', () => {



let taskcard = document.querySelectorAll ('.task-card'); 
let inputsearch = document.querySelector('#inputsearch');

inputsearch.addEventListener("input",function(){

let inputvalue = inputsearch.value.trim().toLowerCase();




taskcard.forEach((cards) => {
let title = cards.dataset.cardTitle?.trim().toLowerCase() || '';
let week  = cards.dataset.cardWeek?.trim().toLowerCase() || '';
let date  = cards.dataset.cardDate?.trim().toLowerCase() || '';

    if(title.includes(inputvalue) || week.includes(inputvalue) || date.includes(inputvalue) ){
          cards.style.display = "flex"; 
    }
    else{
        cards.style.display = "none";
    }



});


})



});



