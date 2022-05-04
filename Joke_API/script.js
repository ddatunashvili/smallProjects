
function generate_joke() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://api.chucknorris.io/jokes/random", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("X-JokesOne-Api-Secret", "YOUR API HERE");
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.querySelector(".joke").innerText = JSON.parse(this.responseText).value
            
        
        }
    
    }
}
generate_joke()