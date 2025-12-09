// CONCATENTATE FUNCTION
function my_second_function() {
    var sentence = "Five is the same as ";
    sentence += 5;
    document.getElementById("concatenate").innerHTML = sentence;
}
//TYPE OF
function type_of() {
    document.getElementById("typeof").innerHTML = (typeof 5);
}
//TYPE COERCION
function type_coercion() {
    document.getElementById("coerce").innerHTML = (typeof "letter");
}
//NAN
function nan_test1() {
    document.getElementById("nan01").innerHTML = "zero" / 0;
}
function nan_test2() {
    document.getElementById("nan02").innerHTML = isNaN("zero");
}
function nan_test3() {
    document.getElementById("nan03").innerHTML = isNaN(0);
}
//INFINITY
function pos_infinity() {
    document.getElementById("pos").innerHTML = (5E310);
}
function neg_infinity() {
    document.getElementById("neg").innerHTML = (-5E310);
}
//BOOLEAN
function true_out() {
    document.getElementById("true").innerHTML = (5 > 3);
}
function false_out() {
    document.getElementById("false").innerHTML = (5 < 3);
}
//CONSOLE LOG
console.log(3 + 3)
console.log(3 < 3)
//EQUALITY
document.write(3 == 5)
document.write(1 === 1)
document.write(1 === "three")
document.write(1 === "one")
document.write(1 === 3)
//AND/ OR NOT
document.write(1 < 3 && 3 < 5)
document.write(1 < 3 && 3 > 5)
document.write(1 < 3 || 3 > 5)
document.write(1 > 3 || 3 > 5)

function not_function1() {
    var not1 = !(5 < 3)
    document.getElementById("not1").innerHTML = not1;
}
function not_function2() {
    var not2 = !(5 > 3)
    document.getElementById("not2").innerHTML = not2;
}
