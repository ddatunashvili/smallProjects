
// all in node list array
const panels = document.querySelectorAll(".panel")

// get panel  from panels (cycle)
panels.forEach((panel)=>{
    // if you click
    panel.addEventListener('click', () => {
        // remove each panel active
        panels.forEach(panel => {
            panel.classList.remove("active")
        })
        // make clicked panel active
        panel.classList.add("active")
    })
})
