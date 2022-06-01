
const insert = document.querySelector(".insert")


// აკრეფის ივენთი
window.addEventListener("keydown",(e)=>{
    console.log(e)
    // ${e.key === ' ' ? 'Space' : e.key }  check
    insert.innerHTML = `
    <div class="key">
        ${e.key === ' ' ? 'Space' : e.key } 
        <small>ღილაკი</small>
    </div>
    <div class="key">
        ${e.keyCode}
        <small>ღილაკის კოდი</small>
    </div>
    <div class="key">
        ${e.code}
        <small>კოდის ივენთი</small>
    </div>`
})