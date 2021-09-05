
// accesing
const progress = document.getElementById("progress")
const prev = document.querySelector("#prev")
const next = document.querySelector("#next")
const circles = document.querySelectorAll(".circle")

// define active step [startpoint]
let current = 1

// click -> step  -> check if its last step 
next.addEventListener("click", ()=>{
    current++
    if (current > circles.length) {
        current = circles.length
    }
    update()
})

// click -> step back  -> check if its first step 
prev.addEventListener("click", ()=>{
    current--
    if (current < 1) {
        current = 1
    }
    update()
})

// iterate on circle , inedex 
// check if circle is active [current] or not
// iterate on actives and give active barr 

function update(){
    circles.forEach((circle, i) => {
        if (i < current) {
            circle.classList.add("active")
        }else{
            circle.classList.remove("active")
        }
    })

    const actives = document.querySelectorAll('.active')
    // (( [x]-1) / (4-1) ) * 100   
    // circles.lengts value is always for for this situation
    progress.style.width = ((actives.length-1) / ( circles.length-1)) * 100 +"%"

    // if cant prev 
    if (current == 1){
        prev.disabled = true
    }else if (current == circles.length){
    // if cant next 
        next.disabled = true
    }else{
        prev.disabled = false
        next.disabled =false
    }
}