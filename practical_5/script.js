
let display = document.getElementById("display");


let firstNumber = "";
let operator = "";

function addNumber(number) {
    display.value += number; 
}

function setOperator(op) {
    firstNumber = display.value;
    operator = op;
    display.value = ""; 
}

function calculate() {
    let secondNumber = display.value;
    let result;

    if (firstNumber == "" || secondNumber == "") {
        return; 
    }

    if (operator == "+") {
        result = Number(firstNumber) + Number(secondNumber);
    } else if (operator == "-") {
        result = Number(firstNumber) - Number(secondNumber);
    } else if (operator == "*") {
        result = Number(firstNumber) * Number(secondNumber);
    } else if (operator == "/") {
        if (Number(secondNumber) == 0) {
            result = "Error";
        } else {
            result = Number(firstNumber) / Number(secondNumber);
        }
    }

    display.value = result;
    firstNumber = result;
    operator = "";
}

function clearDisplay() {
    display.value = "";
    firstNumber = "";
    operator = "";
}

document.addEventListener("keydown", function(event) {
    let key = event.key;

    if (key >= "0" && key <= "9") {
        addNumber(key);
    } 
    else if (key == "+" || key == "-" || key == "*" || key == "/") {
        setOperator(key);
    } 
    else if (key == "Enter" || key == "=") {
        calculate();
    } 
    else if (key == "Escape" || key == "c" || key == "C") {
        clearDisplay();
    }
});