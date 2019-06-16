var slideIndex = 0;
var slidesArr = document.getElementsByClassName("slide");
var maxslideIndex = slidesArr.length;
var dots = document.getElementsByClassName("dot");

slidesArr[0].style.display = "block";
dots[0].className += " active";
function plusSlides(n) {
  showSlide((slideIndex += n));
}

function currentSlide(n) {
  showSlide(n);
}

function showSlide(index) {
  if (index >= maxslideIndex) {
    index = 0;
  } else if (index < 0) {
    index = maxslideIndex - 1;
  }

  slideIndex = index;

  for (i = 0; i < maxslideIndex; i++) {
    slidesArr[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slidesArr[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
}
