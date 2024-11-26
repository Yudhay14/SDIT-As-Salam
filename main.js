
const navBar = document.querySelector('.navbar-nav');

document.querySelector('#ham-icon').onclick = () => {
    event.preventDefault();
    navBar.classList.toggle('active');
};

//klik di luar side bar 

const  ham = document.querySelector('#ham-icon');
document.addEventListener('click', function(e){
    if(!ham.contains(e.target) && !navBar.contains(e.target)){
        navBar.classList.remove('active');
    }
})

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}