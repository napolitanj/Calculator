const equal = document.getElementById("equal");
const clear = document.getElementById("clear");
const erase = document.getElementById("delete");
let display = document.getElementById("display");
let numButton = document.querySelectorAll('[data-number]');
let opButton = document.querySelectorAll('[data-op]');
let firstNum = "";
let secondNum = "";
let total = null;
let operator = undefined;


//Event Listeners for all buttons
equal.addEventListener("click", ()=> 
    operate(total,operator,Number(display.innerText.replace(firstNum,"").replace(operator,""))));

clear.addEventListener("click", ()=> 
    hardReset());

erase.addEventListener("click", ()=> 
    display.textContent = display.textContent.slice(0,-1));

numButton.forEach((button) => button.addEventListener('click', () =>
    inputNum(button.textContent)));

opButton.forEach((button) => button.addEventListener('click', () => 
    store(button.textContent)));


//Store num and Operator
function store(chosen) {
    if (total === null) {
        operator = chosen;
        total = Number(display.innerText);
        display.innerText = total + operator;
    }
    else {
        operator = chosen;
        secondNum = Number(display.innerText);
        display.innerText = operate(total,operator,secondNum)
    }

}

function inputNum(entry) {
    if (total === null)
        display.innerText += entry;
    else
        display.innerText = entry;
}


//Clear
function hardReset() {
firstNum = 0;
secondNum = 0;
total = null;
operator = undefined;
display.innerText = "";
}

//Operators 'N Math Functions
function add(num1,num2) {
    console.log(num1+num2);
    total = (num1+num2);
    return total;
}
function sub(num1,num2) {
    console.log(num1-num2);
    total = (num1-num2);
    return total;
}
function mul(num1,num2) {
    console.log(num1*num2);
    total = (num1*num2);
    return total;
}
function dvd(num1,num2) {
    console.log(num1/num2);
    total = (num1/num2);
    return total;
}
function operate(a, oper, b) {
    console.log(a);
    console.log(b);
    console.log(oper);
    switch(oper){
        case "+" :
            display.innerText = add(a,b);
            return add(a,b);
        case "-" :
            display.innerText = sub(a,b);
            return sub(a,b);
        case "X" :
            display.innerText = mul(a,b);
            return mul(a,b);
        case "/" :
            display.innerText = dvd(a,b);
            return mul(a,b);   
    }
}