//ADDITION OPERTATION
function addition_function() {
    var addition = 2 + 2;
    document.getElementById("add").innerHTML = "2+2= " + addition;
}
//SUBTRACTION OPERTATION
function subtraction_function() {
    var subtraction = 2 - 2;
    document.getElementById("subtract").innerHTML = "2-2= " + subtraction;
}
//MULTIPILCATION OPERTATION
function multiplication_function() {
    var multiplication = 4 * 4;
    document.getElementById("multiply").innerHTML = "4*4= " + multiplication;
}
//DIVISION OPERTATION
function division_function() {
    var division = 4 / 4;
    document.getElementById("divide").innerHTML = "4/4= " + division;
}
//MANY MATH OPERTATIONS
function complex_function() {
    var complex_math = 2 * 8 / 4;
    document.getElementById("math").innerHTML = "two times eight, divided by four equals " + complex_math;
}
//MODULUS OPERTATION
function modulus_function() {
    var modulus = 29 % 3;
    document.getElementById("remainder").innerHTML = "dividing 29 by 3 leaves a remainder of " + modulus;
}
//NEGATION OPERTATION
function negation_function() {
    var x = 10;
    document.getElementById("negator").innerHTML = -x;
}
//INCREMENT/DECREMENT OPERTATION

var y = 5;
y++;
document.write(y);

var z = 5;
z--;
document.write(z);

//RANDOM OPERTATION
window.alert(Math.random() * 50)
//RANDOM OPERTATION
var a = Math.trunc(5.9)
document.write(a)
