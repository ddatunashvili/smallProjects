
const loadingText = document.querySelector(".loading-text")
const bg = document.querySelector(".bg")
let load= 0;

let int = setInterval(blurring, 30)

function blurring(){
  load++
  if (load > 99 ){
    clearInterval(int)
  }
  loadingText.innerText = `${load}%`
  loadingText.style.opacity = range(load, 0, 100, 1, 0);
  bg.style.filter=`blur(${range(load,0,100,20, 0)}px)`

}

//http://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numpers-to-another-range-of-numpers
function range(num, in_min, in_max, out_min, out_max){
    return ((num- in_min) * (out_max - out_min) / (in_max - in_min) + out_min)
}
