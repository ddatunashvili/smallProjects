
const progress = document.getElementById("progress")
const prev = document.querySelector("#prev")
const next = document.querySelector("#next")
const circles = document.querySelectorAll(".circle")

// which is active
let current = 1

next.addEventListener("click", ()=>{
    current++
    if (current > circles.length) {
        current = circles.length
    }
    update()
})


prev.addEventListener("click", ()=>{
    current--
    if (current <1) {
        current = 1
    }
    update()
})


function update(){
    circles.forEach((circle, i) => {
        if (i < current) {
            circle.classList.add("active")
        }else{
            circle.classList.remove("active")
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = ((actives.length-1) / ( circles.length-1)) * 100 +"%"

    // go previus
    if (current === 1){
        prev.disabled = true
    }else if (current === circles.length){
        next.disabled = true
    }else{
        prev.disabled = false
        next.disabled =false
    }
}