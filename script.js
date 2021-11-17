const equal = document.getElementById("equal");
const clear = document.getElementById("clear");
let display = document.getElementById("display");
let numButton = document.querySelectorAll('[data-number]');
let opButton = document.querySelectorAll('[data-op]');
let firstNum = "";
let secondNum = "";
let operator = undefined;


//Event Listeners for all buttons
equal.addEventListener("click", ()=> operate(firstNum,operator,parseInt(display.innerText.replace(firstNum,"").replace(operator,""))));
clear.addEventListener("click", ()=> hardReset());

numButton.forEach((button) => button.addEventListener('click', () =>
display.innerText += button.textContent));

opButton.forEach((button) => button.addEventListener('click', () => 
store(button.textContent)));


//Store num and Operator
function store(displayed) {
    if (operator === undefined) {
        operator = displayed;
        firstNum = parseInt(display.innerText);
        display.innerText = firstNum + operator;
    }
    else {
        secondNum = parseInt(display.innerText.replace(firstNum,"").replace(operator,""));
        operate(firstNum,operator,secondNum);
    }
}


function clearScreen() {
    display.innerText = "";
}

function hardReset() {
firstNum = 0;
secondNum = 0;
operator = undefined;
display.innerText = " ";
}

//Operators 'N Stuff
function add(num1,num2) {
    console.log(num1+num2);
    return (num1+num2);
}
function sub(num1,num2) {
    console.log(num1-num2);
    return (num1-num2);
}
function mul(num1,num2) {
    console.log(num1*num2);
    return (num1*num2);
}
function dvd(num1,num2) {
    console.log(num1/num2);
    return (num1/num2);
}
function operate(a, oper, b) {
    console.log(a);
    console.log(b);
    console.log(oper);
    switch(oper){
        case "+" :
            display.innerText = add(a,b);
            return add(a,b);
            break;
        case "-" :
            display.innerText = sub(a,b);
            return sub(a,b);
            break;
        case "X" :
            display.innerText = mul(a,b);
            return mul(a,b);
            break;
        case "/" :
            display.innerText = dvd(a,b);
            break;
    }
}