// Your code goes here

const topImg = document.querySelector('.intro img');

topImg.addEventListener('mouseenter', () => {
    topImg.style.transform ="scale(0.8)";
    topImg.style.transition = "all 0.3s"
})
topImg.addEventListener("mouseleave", () => {
    topImg.style.transform ="scale(1)";
   topImg.style.transition = "all 0.3s"
 })

 const dest = document.querySelector('.content-destination p');
 const dest2 = document.querySelector('.content-destination');
 const dest3 = document.querySelector('.content-destination h2');
 

 dest.addEventListener('click', (event) => {
     dest.style.transform = "scale(1.4)";
     dest.style.color = "gold";
     event.stopPropagation();
 })

 dest2.addEventListener('click', () => {
     dest2.style.background = "blue";
 } )

 dest3.addEventListener('click', (event) => {
    dest3.style.color = "pink";
    event.stopPropagation();
} )

const midImg = document.querySelector('.content-section img');

 midImg.addEventListener('mouseover', () => {
    midImg.style.transform ="scale(0.3)";
    midImg.style.transition = "all 0.3s"
})
midImg.addEventListener("mouseout", () => {
    midImg.style.transform ="scale(1)";
    midImg.style.transition = "all 0.3s"
 })

 const logo = document.querySelector('h1');

 logo.addEventListener('dblclick', () => {
     logo.style.color = "orange";
 })

 window.addEventListener("resize", () => {
    topImg.src="https://images.unsplash.com/photo-1527058918112-6e17a8213943?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
 })

const bod = document.querySelector('body');

window.addEventListener('scroll', () => {
    bod.style.background = "yellow"
});

const introP = document.querySelector('.intro p');

introP.addEventListener('mousedown', () => {
    introP.style.background = "teal"
})

introP.addEventListener('mouseup', () => {
    introP.style.background = ""
})

const navStop = document.querySelector('.nav-link');

navStop.addEventListener("click", (event) => {
    console.log("I WORK!");
    event.preventDefault();
  })
 