const boxes = document.querySelectorAll(".box")

window.addEventListener("scroll",checkBoxes )
function checkBoxes( ){
   const bottom =  window.innerHeight  / 5 *4
    boxes.forEach(box =>{
        /* getBoundingClientRect() -
        აბრუნებს ელემენტის ზომას და პოზიციას
        left, top, right, bottom, x, y, width, height
        */
        const top = box.getBoundingClientRect().top;;
        if (top < bottom){
            box.classList.add("show")
        }else{
            box.classList.remove("show")
        }
    })
}

checkBoxes()