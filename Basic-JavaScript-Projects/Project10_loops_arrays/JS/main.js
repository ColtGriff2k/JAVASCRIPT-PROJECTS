/// WHILE LOOP
// WHILE FUNCTION
function call_loop() {
    var digit = "";
    var x = 1;
    while (x < 5) {
        digit += "<br>" + x;
        x++; // adds an increment of 1
    }
    document.getElementById("loop").innerHTML = digit;
}

/// STRING LENGTH
// STRING LENGTH FUNCTION
function string_length() {
    var x = "Hello World!";
    var length = x.length; // gets total lenght of string "x"
    document.getElementById("length").innerHTML = length;
}

/// FOR LOOP
// FOR FUNCTION
var instruments = ["guitar", "drums", "piano", "bass", "violin"];
var content = "";
var y;
function for_loop() {
    for (y = 0; y < instruments.length; y++) {
        content += instruments[y] + "<br>";
    }
    document.getElementById("list_of_instruments").innerHTML = content;
}

/// ARRAYS
// ARRAY FUNCTION
function array_function() {
    var cat_picture = []; // [] brackets indicate item index # in the array cat_picture
    cat_picture[0] = "sleeping";
    cat_picture[1] = "playing";
    cat_picture[2] = "eating";
    document.getElementById("array").innerHTML = "In this picture, the cat is " + cat_picture[2] + ".";
}

/// CONSTANTS
// CONSTANT FUNCTION
function constant_function() { // constant cannot be changed at root
    const musical_instrument = { type: "guitar", brand: "fender", color: "black" };
    musical_instrument.color = "red";
    musical_instrument.price = "$700";
    document.getElementById("constant").innerHTML = "The cost of the " + musical_instrument.type + " is " + musical_instrument.price + ".";
}

/// LET FUNCTION
// LET FUNCTION
function let_function() {
    let x = "Let it go!"; // let is a local variable
    document.getElementById("let").innerHTML = x;
}

/// OBJECTS 
// OBJECTS FUNCTION
let car = {
    make: "Dodge ",
    model: "Viper ",
    color: "Red ",
    description: function () {
        return "The car is a " + this.color + this.make + this.model; // "this" refers to object "car"
    }
};
document.getElementById("car_object").innerHTML = car.description();

/// BREAK STATEMENT
// BREAK FUNCTION
function break_function() {
    for (i = 0; i < 10; i++) {
        if (i === 3) { break; } // break exits loop at specified point
    }
    document.getElementById("break").innerHTML = i + "<br>";
}

/// CONTINUE STATEMENT
// CONTINUE FUNCTION
function continue_function() {
    for (i = 1; i < 10; i++) {
        if (i === 3) { continue; } // continue skips of=ver iteration or repititon in the loop
    }
    document.getElementById("continue").innerHTML = i + "<br>";
}
