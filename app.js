var display = document.getElementById("display");

function press(val) {

    if (display.value == "Error"){
        display.value = val;
    } else {
        display.value += val;
    }
    
    display.scrollLeft = display.scrollWidth;
}


function clearDisplay() {
    display.value = "";
}

function delChar() {
    var error = display.value;

    display.value = display.value.slice(0, -1);
    

    if (error == "Error") { 
        display.value = "";
    }
}

function calculate() {
    var text = display.value;
    var opt = "+-×÷%.";

    if (text === "") {
        display.value = "";
        alert("Please enter values to calculate.");
        return;
    } else if (opt.includes(text[0]) || opt.includes(text[text.length - 1])) {
        display.value = "Error";
        return;
    }

    var errorFound = false;

    for (var i = 0; i < text.length - 1; i++) {
        if (opt.includes(text[i]) && opt.includes(text[i + 1])) {
            errorFound = true;
            break;
        }
    }

    if (errorFound) {
        display.value = "Error";
        return;
    } else {
        display.value = eval(text.replace(/×/g, "*").replace(/÷/g, "/"));
    }

    if (text == "Error") { 
        display.value = "";
    }

}