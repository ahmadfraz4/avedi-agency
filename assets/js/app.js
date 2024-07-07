let sidebar = document.querySelector(".sidebar");
let navbar = document.querySelector(".navbar");
let blueLogo = document.querySelector(".blue-logo");
let whiteLogo = document.querySelector(".white-logo");
let navLink = document.querySelectorAll(".nav-item .nav-link");
let toggleBtn = document.querySelector(".sidebar-toggle i");
function toggleSidebar() {
  sidebar.classList.toggle("sidebar-visible");
}
function handleLogo(y) {
  if (y > 40) {
    blueLogo.classList.remove("d-lg-none");
    whiteLogo.classList.remove("d-lg-block");
  } else {
    blueLogo.classList.add("d-lg-none");
    whiteLogo.classList.add("d-lg-block");
  }
}
let vertical = window.screenY;
if (vertical < 60) {
  navLink.forEach((link) => {
    link.style.color = "white";
  });
}
window.addEventListener("scroll", () => {
  let y = scrollY;
  handleLogo(y);
  if (y > 60) {
    navbar.classList.remove("bg-transparent");
    navbar.classList.add("bg-white");
    navLink.forEach((link) => {
      link.style.color = "black";
    });
    toggleBtn.classList.add("text-black");
    toggleBtn.classList.remove("text-white");
  } else {
    navbar.classList.add("bg-transparent");
    navbar.classList.remove("bg-white");
    navLink.forEach((link) => {
      link.style.color = "white";
    });
    toggleBtn.classList.add("text-white");
    toggleBtn.classList.remove("text-black");
  }
});
let dataNumber = document.querySelectorAll(".increasing-number");

dataNumber.forEach((item, index) => {
  let innerNumber = 0;
  let targetNumber = Number(item.innerText)
  let interval_id = setInterval(() => {
    if (innerNumber <= targetNumber) {
      innerNumber = innerNumber + 1;
      item.innerHTML = innerNumber + '<sup>+</sup>';
    }else{
      clearInterval(interval_id)
    }
  }, .5);

});

// all elements for custom slider
let slideBack = document.getElementById('slide-back')
let slideNext = document.getElementById('slide-next')
let customSlideCounter = 0;
let isMouseDownOnSlider = false;
let sliderCard = document.querySelector('.custom-slide')
let allSliderCard = document.querySelectorAll('.custom-slide')
let reviews = document.querySelector('.reviews')


class customSlider {
  constructor(slideCount){
     this.slideCount = slideCount;
  }
  updateSlide(){
   if(customSlideCounter >= allSliderCard.length - 1){
     slideNext.disabled = true
   }else{
     slideNext.disabled = false
   }

   if(customSlideCounter <= 0){
     slideBack.disabled = true
   }else{
     slideBack.disabled = false
   }
   sliderCard.style.marginLeft = `-${this.slideCount * 100}%`
  }
}
// function to slide next
function customSlideNext(){
 if(customSlideCounter < allSliderCard.length - 1){
   customSlideCounter = customSlideCounter + 1
   let s1 =new customSlider(customSlideCounter)
   s1.updateSlide(); 
 }else{
   customSlideCounter = customSlideCounter;
 }
}
// function to slide back
function customSlideBack(){
 if(customSlideCounter > 0){
   customSlideCounter = customSlideCounter - 1
   let s1 =new customSlider(customSlideCounter)
   s1.updateSlide(); 
 }else{
   customSlideCounter = customSlideCounter
 }
}
// sliding carousel on arrow click
slideNext.addEventListener('click',customSlideNext)
slideBack.addEventListener('click',customSlideBack)

// sliding carousel on mouse drag 
reviews.addEventListener('mousedown',(e)=>{
 reviews.style.cursor = 'grab'
 draggingActive(e)
})

function draggingActive(val){
 isMouseDownOnSlider = true
 reviews.addEventListener('mouseup',(e)=>{
 
  isMouseDownOnSlider = false
 reviews.style.cursor = 'default'
  if(e.clientX > val.clientX){
    customSlideBack();
  }else if(e.clientX < val.clientX){
    customSlideNext()
  }
 })
}

let sections = document.querySelectorAll('.section')
let navItem = document.querySelector('.navbar-nav')
let navbarLink = navItem.querySelectorAll('.nav-link')
let body = document.body
window.onscroll = () =>{
  sections.forEach((section)=>{
    let top = window.scrollY;
    let topOfSection = section.offsetTop;
    let height = section.offsetHeight;
    let id = section.getAttribute('id')
      if(top >= topOfSection && top < topOfSection + height){
        navbarLink.forEach((link)=>{
          link.classList.remove('active')
          document.querySelector('.navbar-nav a[href*='+id+']').classList.add('active')
        })
      }

  })
}
