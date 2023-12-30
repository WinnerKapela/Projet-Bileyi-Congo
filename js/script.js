
var btnMode = document.getElementById('BtnMode');
var PageContent = document.querySelector('.Page');

btnMode.addEventListener('click', ()=>{
    PageContent.classList.toggle('DarkPage');
});
// Bars Button
var barsBtn = document.getElementById('bars');
var menu = document.getElementById('NavLink');
barsBtn.addEventListener('click',()=>{
    menu.classList.toggle('menuOn');
});

//Regex for search bar
var searchField = document.getElementById('Recherche'), btnSearch = document.getElementById('Search'), missItem = document.getElementById('missItem');

btnSearch.addEventListener('click', ()=>{
    if(/P[ou]nd[ou]/i.test(searchField.value)){
        location.replace('saka-saka.html');
        searchField.value = '';
   }else if(/F[ui]mb[uow]a/i.test(searchField.value)){
    location.replace('fumbwa.html');
    searchField.value = '';
}else if(/Mb[iu]nz[ou]/i.test(searchField.value)){
    location.replace('mbinzo.html');
}else if(/Fufu/i.test(searchField.value)){
    location.replace('fufu.html');
}else if(searchField.value == ''){
    missItem.style.display = 'block';
    missItem.textContent = 'Vous devez saisir quelque chose';
    searchField.value = '';
}else{
    missItem.textContent = 'Plat indisponible';
    missItem.style.display = 'block';
    searchField.value = '';
}
});

//JQuery
jQuery(document).ready(function( $ ){

    // search bar fixed on scroll
    $(window).scroll(function() {
      if ($(this).scrollTop() > 120) {
        $('#SearchBox').addClass('searchBox-scrolled');
      } else {
        $('#SearchBox').removeClass('searchBox-scrolled');
      }
    });

});