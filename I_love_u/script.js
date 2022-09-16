
// როცა ჰოვერზეა no


var no = document.querySelector(".no")
var l = setTimeout(love, 6000)



var image = document.querySelector("img")
var span = document.querySelector("span")
var lov = document.querySelector('.yes')

no.addEventListener("mouseover",()=>{
    document.querySelector(".yes").classList.add("dissapear")
    
    // შორს თუ ახლოს 
    var far_or_near = `${ generateRandom(20, 900)}px`
    // მხარე
    var position = ["left","top"]
    var  where = position[ Math.floor(Math.random() * position.length)]


    var left = parseInt(get_style_rule_value(".no","left").slice(0,-2) )
    var top = parseInt(get_style_rule_value(".no","top").slice(0,-2) )
    console.log(far_or_near,where,top,left)
    if (where == "left"  && left > 20 && left <= 1200){
        no.style.left = far_or_near  
    }else if (where == "top"  && top >= 20 && top <= 900){
        no.style.top = far_or_near  
    }



})


function love(){
    clearTimeout(l)
    span.classList.add("dissapear")
    span.innerText = "U L me 😛 "
    span.classList.add("appear")
    var l = setTimeout(nope, 6000)
}
function nope(){
    clearTimeout(l)
    lov.style.cursor = "auto"
    image.classList.add("dissapear")    
    image.classList.add("appear")
    image.setAttribute("src","https://c.tenor.com/IXtZkPncBbgAAAAd/sweaty-sweating.gif") 



    span.classList.add("dissapear")
    span.innerText = "You Lick me, don't you? 😛"
    span.classList.add("appear")
    var l = setTimeout(ok, 6000)
}
function ok(){
    clearTimeout(l)
    image.classList.add("dissapear")
    image.style.width ="50%"
    image.style.borderRadius ="0"   
    image.setAttribute("src","https://media0.giphy.com/media/XHr6LfW6SmFa0/giphy.gif?cid=790b7611bb4e5c11e5b9d95656523556106d588ef02c5bc6&rid=giphy.gif&ct=g") 
    
    image.classList.add("appear")

    span.classList.add("dissapear")
    span.innerText = "oops! 🤭🤭"
    span.classList.add("appear")
    document.querySelector(".no").classList.add("dissapear")

}


function generateRandom(min=0, max=0) {

    // find diff
    let difference = max - min;

    // generate random number 
    let rand = Math.random();

    // multiply with difference 
    rand = Math.floor( rand * difference);

    // add with min value 
    rand = rand + min;
    

    return rand;
}
function update(){
    get_style_rule_value(selector, style)
}

function get_style_rule_value(selector, style)
{
 for (var i = 0; i < document.styleSheets.length; i++)
 {
  var mysheet = document.styleSheets[i];
  var myrules = mysheet.cssRules ? mysheet.cssRules : mysheet.rules;

  for (var j = 0; j < myrules.length; j++)
  {
   if (myrules[j].selectorText && myrules[j].selectorText.toLowerCase() === selector)
   {
    return myrules[j].style[style];
   }
  }
 }
};





function loving(){
   lov.style.borderRadius ='0';
   lov.style.width ='400px';
   lov.style.height ='100px';
   lov.innerText = `ხანდახან მეც მიყვარხარ  საყვარელო ❤️`
   lov.classList.add("dissapear")
}


