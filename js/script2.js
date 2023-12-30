// For Button toggle page 2
var btn = document.querySelector('.Recette-Title');
var recet = document.querySelector('.Recette');
var border = document.querySelector('.Border');

btn.addEventListener('click', ()=>{
    recet.classList.toggle('displayRecet');
    border.classList.toggle('sgowBorder');
});


