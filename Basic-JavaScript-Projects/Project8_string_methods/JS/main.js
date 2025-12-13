/// CONCAT METHOD
// CONCATENATE FUNCTION
function concat_function1() {
    var strg1 = "some ";
    var strg2 = "string";
    var full_strg = strg1.concat(strg2);
    document.getElementById("concatenate").innerHTML = full_strg;
    // combines string and other values
}
/// SLICE METHOD
// SLICE FUNCTION
function slice_function1() {
    var sentence = "All work and no play makes Johnny a dull boy.";
    var section = sentence.slice(27, 33);
    document.getElementById("slice").innerHTML = section;
    // outputs the selected data at chosen integers
}
/// toUPPERCASE METHOD
// UPPERCASE FUNCTION
function upper_function1() {
    var sentence = "Basic string one.";
    var section = sentence.toUpperCase();
    document.getElementById("upper").innerHTML = section;
    // capitalizes all the text in the string "sentence"
}
/// SEARCH METHOD
// SEARCH FUNCTION
function search_function1() {
    var sentence = "Basic string two.";
    var section = sentence.search(/two/);
    document.getElementById("search").innerHTML = section;
    // searches for a specific variable (in this case, the varible "two")
}
/// NUMBER METHOD
// NUMBER FUNCTION
function string_function1() {
    var x = 182;
    document.getElementById("numbers_to_string").innerHTML = x.toString();
    // converts a number to a string
}
/// PRECISION METHOD
// PRECISION FUNCTION
function precision_function1() {
    var y = 12938.3012987376112;
    document.getElementById("precise").innerHTML = y.toPrecision(10);
    // returns variable y to nearest 10 decimal spaces
}
/// toFIXED METHOD
// toFIXED FUNCTION
function toFIXED_function1() {
    var x = 5.56789;
    document.getElementById("fixed").innerHTML = x.toFixed(2);
    // returns variable x to the nearest tenth (2)
}
/// valueOF METHOD
// valueOF FUNCTION
function valueOF_function1() {
    var y = "15n";
    document.getElementById("value").innerHTML = y.valueOf();
    // only displays primitive or value that cannot be broken down futher (basic data type like string or number)
}
