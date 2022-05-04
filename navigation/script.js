
const open_nav = document.getElementById('open');
const close_nav = document.getElementById('close');
const container = document.querySelector(".container");
const circle = document.querySelector(".circle")
// open nav
open_nav.addEventListener('click', ()=>{
    container.classList.add('show-nav')
    document.documentElement.scrollTop = 0;
    circle.style.transform ="rotate(-90deg)"

})
// close nav
close_nav.addEventListener('click', ()=>{
    container.classList.remove('show-nav')
    circle.style.transform ="rotate(0deg)"
    
})

