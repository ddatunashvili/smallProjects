

var toggles = document.querySelectorAll(".faq-toggle")

toggles.forEach(toggle =>{
    // ღილაკზე კლიკზე
    toggle.addEventListener("click",() =>{
        // იპოვე ღილაკის მშობელი ( თუ აქ აქტივი აშორებს თუ არადა აქტივებს toggle()   )
        toggle.parentNode.classList.toggle("active") 
    })
    
})