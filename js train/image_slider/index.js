const slides = document.querySelectorAll(".silder img");
let slideIndex = 0;
let intervale = null;

document.addEventListener("DOMContentLoaded", intializeSlider);


function intializeSlider(){
  
   if(slides.length>0){
    slides[slideIndex].classList.add("displaySlide");
    intervale = setInterval(nextSlide,5000);
   }
 
}
function showSlide(index){
  
  if(index >= slides.length)
    {
      slideIndex = 0;
    }
  else if (index<0){
    slideIndex = slides.length -1;
  }
  
  slides.forEach(slide =>{slide.classList.remove("displaySlide");

  });
  slides[slideIndex].classList.add("displaySlide") 

}
function prevSlide(){
  clearInterval(intervale)
  slideIndex--; 
  showSlide(slideIndex);
}
function nextSlide(){
  slideIndex++; 
  showSlide(slideIndex);
}
