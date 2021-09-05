
const open_nav = document.getElementById('open');
const close_nav = document.getElementById('close');
const container = document.querySelector(".container");
// open nav
open_nav.addEventListener('click', ()=>{
    container.classList.add('show-nav')
    document.documentElement.scrollTop = 0;
})
// close nav
close_nav.addEventListener('click', ()=>{
    container.classList.remove('show-nav')
    
})

