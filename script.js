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
var num2Chosen = false;
var setOperator = ""
var operatorChosen = false;
var decimalChosen = false;
var result = 0;


//FUNCTIONS ------------------------------------------

function settingNums(event){
    if (num1Chosen === false){
        //If the first number hasnt been chosen, then it goes into num1
        
        if (decimalChosen === false && event.target.innerText === "."){
            num1 += (event.target.innerText);
            decimalChosen = true;
            console.log("returning")
            display.innerText = num1;
            return;
        }
        if (num1[num1.length-1]==="." && event.target.innerText==="."){
            return;
        }
        else{
            num1 += (event.target.innerText);
        }
        console.log(num1);
        display.innerText = num1;
    }
    if (operatorChosen === true){
        //If the operator was chosen, goes into the num2
        
        if (decimalChosen === false && event.target.innerText === "."){
            num2Chosen = true;
            num2 += (event.target.innerText);
            decimalChosen = true;
            console.log("returning")
            display.innerText = num2;
            return;
        }
        if (num2[num2.length-1]==="." && event.target.innerText==="."){
            return;
        }
        else{
            num2 += (event.target.innerText);
        }
        console.log(num2);
        display.innerText = num2;
    }
}

function settingOperator(event){
    //Sets the operator as well as changes the condition
    setOperator = event.target.innerText;
    console.log(setOperator);
    display.innerText = setOperator;
    operatorChosen = true;
    num1Chosen = true;
    decimalChosen = false;
}

function equation(){
 
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    
    if (operatorChosen===false){
        //If the operator hasnt been chosen yet, show the first number
        result += num1;
        num1 = result;
        num2 = "";
        console.log(result);
        if (num2Chosen === true){
            //if the 2nd number has been chosen, just add the second num
            result += num2;
            console.log(result);
        }
        display.innerText = result;
        return;
    }

    if (setOperator === "+"){
        //Sets it to actual numbers
        
        result = num1 + num2;
        display.innerText = result;
    }
    else if (setOperator === "-"){
        //Sets it to actual numbers
        result = num1 - num2;
        display.innerText = result;
    }
    else if (setOperator === "*"){
        //Sets it to actual numbers
        result = num1 * num2;
        display.innerText = result;
    }

    else{
        //Sets it to actual numbers
        if (num2 === 0){
            //If the second number is a 0 while dividing, set to ERROR
            display.innerText = "";
            display.innerText = "ERROR";
        }
        else{
            result = num1/num2;
            //If not, display the result
            display.innerText = result;
        }
    }
    //changes the first one to the result
    if (display.innerText === "ERROR"){
        num1 = 0;
        num2 = "";
        console.log(num2);
        // operatorChosen = false;
    }
    else{
        num1 = result;
        num2 = "";
        console.log(num2);
    }
    //finishing stuff
    num1Chosen = false;
    operatorChosen = false;
    console.log(result);
}

function resetEquation(){
    //CLEARS EVERYTHING
    num1 = "";
    num2 = "";
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