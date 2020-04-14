$(document).ready(function(){

});

$(".subheader").on("click", function() {
    $(".calltoaction").slideToggle();
});

$(".call_button").on("click", function(e) {
    e.preventDefault();
    $(".column img").toggleClass("bigger");
});

$(".logo").on("click", function() {
    $(".headerimage").slideToggle();
});


function swear(){
    document.getElementById("header_title").innerHTML = "fuck";
}

function unswear2(){
    document.getElementById("header_title").innerHTML = "Yikes";
}

function unswear(){
    var x = document.getElementById("header_title");
    if (x.innerHTML === "fuck") { //if it says fuck when you click it then make it say yikes
        x.innerHTML = "Yikes";
    } else {
        x.innerHTML = "fuck";     //if it says yikes then make it say fuck
    }
}

function alertSwear(){
    alert("Stop swearing you little fuck");
}

function spooky(){
    var x = document.getElementById("header_title");
    if (x.innerHTML === "fuck") {
        alert("Stop swearing you little fuck");
    } else {
        x.innerHTML = "Yikes";
    }
} 

//the below is used for the fucking slideshow you dick

function myFunction(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg");
    // Get the image text
    var imgText = document.getElementById("imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
  }

  var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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