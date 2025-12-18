const display = document.getElementById("display");



function appendToDisplay(input){
display.value += input;
}

function clearDisplay(){
    display.value = "";
}


function calculate() {
    if (display.value !== "") {
        display.value = Math.floor(Math.random() * 100) + 1;
    }
}


