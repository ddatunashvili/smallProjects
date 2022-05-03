var sounds = ["veluruli","kai","euro","balu", "vaime", "guram"]

sounds.forEach(sound => {
    // ღილაკის შექმნა
    const btn = document.createElement("button")
    // კლასის მიცემა
    btn.classList.add('btn')
    //შესაბამისი ხმის სახელის მიცემ
     btn.innerText = sound
    //  კლიკზე შესაბამისი ხმა დაუკრას
    btn.addEventListener("click",()=>{
        stopSongs()
        document.querySelector(`.${sound}`).play()
    })
   
    // ღილაკებში ჩასმა ღილაკის
    document.querySelector(".buttons")
    .appendChild(btn)
})


function stopSongs(){
    for (s of sounds){
        var song = document.querySelector(`.${s}`)
        song.pause()
        song.currentTime = 0
    }
        
}