// Removes fade out once page is loaded
window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('fade-out');
});

// Adds functionality to the form
function validateForm() {
    let x = document.forms["aForm"]["phoneNumber"].value;
    if (x === "") {
        alert("Please enter a valid phone number.");
        return false;
    }
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

//Hides form by default
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("myForm").style.display = "none";
});

//Makes slideshow functional after DOM is ready
$("#slideshow > div:gt(0)").hide();

setInterval(function () {
    $('#slideshow > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
}, 3000);
