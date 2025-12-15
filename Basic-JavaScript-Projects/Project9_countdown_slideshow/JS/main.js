/// COUNTDOWN SLIDESHOW
// COUNTDOWN FUNCTION
function countdown() {
    var seconds = document.getElementById("seconds").value; // allows a countdown from input value
    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000); // tick set to 1000 milliseconds or 1 second
        if (seconds == -1) {
            alert("Time's Up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}

////SLIDESHOW/ CAROUSEL
let slideIndex = 1;
showSlides(slideIndex);
/// NEXT/PREVIOUS CONTROLS
function plusslides(n) {
    showSlides(slideIndex += n);
}
///THUMBNAIL IMAGE CONTROLS
function currentslide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) { // overrides CSS hidden images from .myslides
    let i;
    let slides = document.getElementsByClassName("myslides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) { slides[i].style.display = "none" }
    for (i = 0; i < dots.length; i++) { dots[i].className = dots[i].className.replace("active", ""); }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += "active";
}