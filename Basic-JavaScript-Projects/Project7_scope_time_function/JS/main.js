// LOCAL/ GLOBAL VARIABLES
// GLOBAL VARIABLE
var x = 5;
function function1() {
    // LOCAL VARIABLE
    var y = 3;
    document.getElementById("global").innerHTML = x * y;
}
function function2() {
    document.getElementById("local").innerHTML = x / y;
    console.log(x / y)
}
// IF STATEMENTS W/ DATES
function date1() {
    // IF STATEMENT
    if (new date().getHours() < 18) {
        document.getElementById("greet").innerHTML = "How are you today?";
        // NO ELSE STATEMENT TO RETURN ALT RESPONSE
        console.log(new date().getHours() < 18)
    }
}
function lesser1() {
    // IF STATEMENT
    if (3 < 5) {
        document.getElementById("less").innerHTML = "Three is less than five.";
    }
}
// ELSE STATEMENTS
function age_function() {
    age = document.getElementById("age").value;
    if (age >= 18) { vote = "You are old enough to vote!"; }
    // ELSE STATEMENT
    else { vote = "You are not old enough to vote!"; }
    document.getElementById("how_old_are_you?").innerHTML = vote;
}
// ELSE IF STATEMENTS
function time_function() {
    var time = new date().getHours();
    var reply;
    if (time < 12 == time > 0) { reply = "It is morning time!"; }
    // ELSE IF STATEMENT
    else if (time >= 12 == time < 18) { reply = "It is afternoon."; }
    else { reply = "It is evening time."; }
    document.getElementById("time_of_day").innerHTML = reply;
}