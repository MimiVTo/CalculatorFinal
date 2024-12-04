// VARIABLES / BUTTONS -------------------------------

var display = document.getElementById("display");

    //NUMBERS
var numbers = document.getElementsByClassName("numbers");
console.log(numbers);

    //OPERATORS
var operators = document.getElementsByClassName("operators");
var decimalBtn = document.getElementById("decimal");

    //SETTING BUTTONS
var equal = document.getElementById("equal");
var reset = document.getElementById("resetBtn");

    //SETTING VARIABLES
var num1 = "";
var num1Chosen = false;
var num2 = "";
var setOperator = ""
var operatorChosen = false;


//FUNCTIONS ------------------------------------------

function settingNums(event){
    if (num1Chosen === false){
        num1 = (event.target.innerText);
        console.log(num1);
        display.innerText = num1;
    }
    if (operatorChosen === true){
        num2 = (event.target.innerText);
        console.log(num2);
        display.innerText = num2;
    }
}

function settingOperator(event){

    setOperator = event.target.innerText;
    console.log(setOperator);
    display.innerText = setOperator;
    operatorChosen = true;
    num1Chosen = true;

}

function equation(){

    var result = 0;

    if (setOperator === "+"){
        result = parseInt(num1) + parseInt(num2);
        display.innerText = result;
    }
    if (setOperator === "-"){
        result = parseInt(num1) - parseInt(num2);
        display.innerText = result;
    }
    if (setOperator === "*"){
        result = parseInt(num1) * parseInt(num2);
        display.innerText = result;
    }
    if (setOperator === "/"){
        result = parseInt(num1) / parseInt(num2);
        if (num2 === 0){
            display.innerText = "ERROR";
        }
        else{
            display.innerText = result;
        }
    }

    num1 = result;

    console.log(result);
}

function resetEquation(){
    //CLEARS EVERYTHING
    num1 = 0;
    num2 = 0;
    setOperator = "";
    num1Chosen = false;
    operatorChosen = false;
    display.innerText = "";
}

//EVENT LISTENERS -------------------------------------

for (var i = 0; i<numbers.length;i++){
    numbers[i].addEventListener("click", settingNums);
}
for (var i = 0; i<operators.length;i++){
    operators[i].addEventListener("click", settingOperator);
}
equal.addEventListener("click", equation);
reset.addEventListener("click", resetEquation);

// reset.addEventListener("click", resetEquation);