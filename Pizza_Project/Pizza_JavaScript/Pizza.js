function getReceipt() {
    //This initializes our string so it can get passed from
    //function to function, growing line by line into a full receipt
    var text1 = "<h3>You Ordered: </h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>";
        }
    }
    if (selectedSize === "Single Slice") {
        sizeTotal = 1;
    }
    else if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    }
    else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    }
    else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    }
    else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");
    //These variables will get passed on to each function
    getTopping(runningTotal, text1);
};

function getTopping(runningTotal, text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppingsM");
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected toppingM item: (" + toppingArray[j].value+")");
            text1 = text1 + toppingArray[j].value + "<br>";
        }
    }
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    }
    else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping items: " + toppingCount)
    console.log(toppingCount + " toppingM-1 free topping= " + "$" + toppingTotal + ".00");
    console.log("toppingM text1: " + text1);
    console.log("Purchase Total: " + "$" + runningTotal + ".00");
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong><h3>";
};

function getTopping(runningTotal, text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppingsV");
    for (var k = 0; k < toppingArray.length; k++) {
        if (toppingArray[k].checked) {
            selectedTopping.push(toppingArray[k].value);
            console.log("selected toppingV item: (" + toppingArray[k].value+")");
            text1 = text1 + toppingArray[k].value + "<br>";
        }
    }
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingTotal - toppingCount);
    }
    else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected toppingV items: " + toppingCount)
    console.log(toppingCount + " toppingV-1 free topping= " + "$" + toppingTotal + ".00");
    console.log("toppingV text1: " + text1);
    console.log("Purchase Total: " + "$" + runningTotal + ".00");
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong><h3>";
};
