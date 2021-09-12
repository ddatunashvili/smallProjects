
// წვდომა ელემენტებზე
const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.containter')
const button = document.querySelector('.split.right .btn')

// თუ მაუს მიიტან ჰოვერლეფტ
left.addEventListener('mouseenter', ()=> container.classList.add("hover-left"))
left.addEventListener('mouseleave', ()=> container.classList.remove("hover-left"))
// თუ მაუს მიიტან ჰოვერრაით
right.addEventListener('mouseenter', ()=> container.classList.add("hover-right"))
right.addEventListener('mouseleave', ()=> container.classList.remove("hover-right"))

right.addEventListener("mouseenter",()=> {
	document.querySelector('.split.right .btn').innerText="MARVEL"
})
button.addEventListener("mouseenter",()=> {
	button.innerText=""
})

right.addEventListener("mouseleave",()=> {
	document.querySelector('.split.right .btn').innerText="არჩევა"
})

button.addEventListener("mouseleave",()=> {
	button.innerText="MARVEL"
})
