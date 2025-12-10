// TERNARY FUNCTION
function ride_function() {
    // assigns variables
    var height, can_ride;
    //defines variables height and can_ride
    height = document.getElementById("height").value;
    can_ride = (height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("ride").innerHTML = can_ride + " to ride.";
}
function vote_function() {
    // assigns variables
    var age, can_vote;
    //defines variables age and can_vote
    age = document.getElementById("age").value;
    can_vote = (age < 18) ? "You are too young" : "You are old enough";
    document.getElementById("vote").innerHTML = can_vote + " to vote.";
}

// CONSTRUCTOR FUNCTION
// function that defines object vehicle
function vehicle(make, model, year, color) {
    this.vehicle_make = make;
    this.vehicle_model = model;
    this.vehicle_year = year;
    this.vehicle_color = color;
}
var jack = new vehicle("dodge", "viper", 2020, "red");
var emily = new vehicle("jeep", "trail hawk", 2019, "white and black");
var erik = new vehicle("ford", "pinto", 1971, "mustard");
//function that uses vehicle function based on variable erik
function myfunction() {
    document.getElementById("keywords_and_constructors").innerHTML = "erik drives a " + erik.vehicle_color + "-colored " + erik.vehicle_model + " manufactured in "
        + erik.vehicle_year;
}
function afunction() {
    // assigns variables
    var age, can_hunt;
    //defines variables age and can_hunt
    age = document.getElementById("years").value;
    can_hunt = (age < 18) ? "You are too young" : "You are old enough";
    document.getElementById("new_and_this").innerHTML = can_hunt + " to hunt deer.";
}
// function that defines object person
function person(firstName, lastName, age) {
    this.person_first = firstName;
    this.person_last = lastName;
    this.person_age = age;
}
var bob = new person("bob", "roberts", 43);
var bill = new person("bill", "williams", 45);
//function that uses person function based on variables bob and bill
function this_function() {
    document.getElementById("this_constructor").innerHTML = "bob is " + bob.person_age + " years old and bill is " + bill.person_age + " years old.";
}

//NESTED FUNCTION
//function that counts up by one
function count_function() {
    document.getElementById("nested_function").innerHTML = count();
    function count() {
        var start_point = 9
        function plus_one() { start_point += 1; }
        plus_one();
        return start_point;
    }
}