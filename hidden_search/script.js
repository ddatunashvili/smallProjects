

const search = document.querySelector(".search")
const btn = document.querySelector(".btn")
const input = document.querySelector(".input")


btn.addEventListener("click", ()=>{
    // toggle 
    // add class active if ot's not active
    // remove if it's active
    search.classList.toggle("active")
    input.focus()
})