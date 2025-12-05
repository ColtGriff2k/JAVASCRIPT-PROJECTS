//DICTIONARIES
function car_dictionary1() {
    var car = {
        make: "Alfa Romeo",
        model: "Giulia"
    };
    delete car.make
    //This will delete the key value pair (make:"Alfa Romeo") being called by the funtion
    document.getElementById("dictionary1").innerHTML = car.make;
}
function car_dictionary2() {
    var car = {
        make: "Alfa Romeo",
        model: "Giulia"
    };
    document.getElementById("dictionary2").innerHTML = car.model;
}
