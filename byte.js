const title = "THE PERFECT TOUR GUIDE";
const titleEl = document.getElementById("title");

let index = 0;

function typeTitle() {
  if (index < title.length) {
    titleEl.innerHTML += title.charAt(index);
    index++;
    setTimeout(typeTitle, 150);
  }
}

window.addEventListener("load", typeTitle);
window.addEventListener("resize", () => {
  if (window.scrollY < 80) {
    document.body.style.marginTop = "80px";
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= 80) {
    document.body.style.marginTop = "0";
  }
});

// code for search bar
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent the default form submission behavior
  
  const city = document.querySelector('#search-input').value;
  if(city=="hyderabad")
  {
    window.open("../hyderabad/guide1.html");
  }
  else if(city=="vizag")
  {
    window.open("../vizag/guide2.html");
  }
  else if(city=="warangal")
  {
    window.open("../warangal/guide3.html");
  }
  else if(city=="mumbai")
  {
    window.open("../Mumbai/guide4.html");
  }
  else if(city=="delhi")
  {
    window.open("../Delhi/guide5.html");
  }
  else{
    window.open("../Rest/guide6.html");
  }
});