const equal = document.getElementById("equal");
const clear = document.getElementById("clear");
const erase = document.getElementById("delete");
let display = document.getElementById("display");
let lastEntry = document.getElementById("lastEntry");
let numButton = document.querySelectorAll('[data-number]');
let opButton = document.querySelectorAll('[data-op]');
let firstNum = "";
let secondNum = "";
let total = null;
let operator = undefined;
let running = false;


//Event Listeners for all buttons
equal.addEventListener("click", ()=> 
    runOp());

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
        lastEntry.innerText = total + " " + operator;
        display.innerText = "";
    }
    else if (running != false) {
        operator = chosen;
        lastEntry.innerText = total + " " + operator;
        display.innerText= "";
        running = false;
    }
    else {
        secondNum = Number(display.innerText);
        total = operate(total,operator,secondNum);;
        operator = chosen;
        lastEntry.innerText = total + " " + operator;
        display.innerText = "";
    }
}

//Equal Function
function runOp() {
    if (running != false) {
        operate(total,operator,secondNum);
    }
    else {
        secondNum = Number(display.innerText)
        lastEntry.innerText = total + " " + operator + " " + secondNum;
        operate(total,operator,secondNum);
    }
}


//Main display as numbers are entered.
function inputNum(entry) {
    if (running != false) {
        lastEntry.innerText = total;
        display.innerText = entry;
        running = false;
    }
    else {
        display.innerText += entry;
    }
}

//Clear All
function hardReset() {
    firstNum = 0;
    secondNum = 0;
    total = null;
    operator = undefined;
    display.innerText = "";
    lastEntry.innerText = "";
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
    if (num2 === 0) {
        alert("Can't divide by 0, broh.");
        hardReset();
    }
    else {
        total = (num1/num2);
        return total;
    }
}
function operate(a, oper, b) {
    console.log(a);
    console.log(b);
    console.log(oper);
    running = true;
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
            return dvd(a,b);   
    }
}