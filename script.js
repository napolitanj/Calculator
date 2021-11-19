
const equal = document.getElementById("equal");
const clear = document.getElementById("clear");
const erase = document.getElementById("delete");
let display = document.getElementById("display");
let lastEntry = document.getElementById("lastEntry");
let numButton = document.querySelectorAll('[data-number]');
let opButton = document.querySelectorAll('[data-op]');
let secondNum = "";
let total = null;
let operator = undefined;
let running = false;


//Event listeners for all buttons
equal.addEventListener("click", ()=> 
    runOp());

clear.addEventListener("click", ()=> 
    hardReset());

erase.addEventListener("click", ()=> 
    deleteNum());

numButton.forEach((button) => button.addEventListener('click', () =>
    inputNum(button.textContent)));

opButton.forEach((button) => button.addEventListener('click', () => 
    store(button.textContent)));


//Event listeners for keyboard
window.addEventListener("keydown", keyboard);


//Store num and Operator
function store(chosen) {
    if (total === null || operator === undefined) {
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
    console.log(operator)
    if (operator === undefined) {
        total = Number(display.innerText);
        lastEntry.innerText = total + " =";
    }
    else if (running != false) {
        lastEntry.innerText = total + " " + operator + " " + secondNum;
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
    if (entry === "." && display.innerText.includes(".")) {
        return;
    }
    
    else if (running != false) {
        lastEntry.innerText = total + " " + operator;
        display.innerText = entry;
        display.innerText = display.innerText.substring(0,12);
        running = false;
    }
    else {
        display.innerText += entry;
        display.innerText = display.innerText.substring(0,12);
    }
}

//Clear All
function hardReset() {
    secondNum = "";
    total = null;
    operator = undefined;
    display.innerText = "";
    lastEntry.innerText = "";
    running = false;
}

//Scientific Notation
function sciNo(result) {
    if (result > 999999999999) {
        return result.toExponential().replace(/e\+?/, ' x 10^');
    }
    else {
        return result;
    }
}

//Delete
function deleteNum() {
    display.textContent = display.textContent.slice(0,-1);
}

//Operators 'N Math Functions
function add(num1,num2) {
    total = (num1+num2);
    return total;
}
function sub(num1,num2) {
    total = (num1-num2);
    return total;
}
function mul(num1,num2) {
    total = (num1*num2);
    return total;
}
function dvd(num1,num2) {
    if (num2 === 0) {
        let msg = display.innerText = "Can't divide by 0, broh.";
        return msg;
    }
    else {
        total = (num1/num2);
        return total;
    }
}
function operate(a, oper, b) {
    running = true;
    switch(oper){
        case "+" :
            final = add(a,b);
            final = sciNo(final);
            display.innerText = final;
            return final;
        case "-" :
            final = sub(a,b);
            final = sciNo(final);
            display.innerText = final;
            return final;
        case "x" :
            final = mul(a,b);
            final = sciNo(final);
            display.innerText = final;
            return final;
        case "/" :
            final = dvd(a,b);
            final = sciNo(final);
            display.innerText = final;
            return final;
        case "*" :
            final = mul(a,b);
            final = sciNo(final);
            display.innerText = final;
            return final;  
    }
}

function keyboard(k) {
    if (k.key === "Backspace") deleteNum();
    if (k.key === "=" || k.key === "Enter") runOp();
    if (k.key === "Escape" || k.key === "Delete") hardReset();
    if (k.key >= 0 && k.key <= 9 || k.key === ".") inputNum(k.key);
    if (k.key === "+" || k.key === "-" || k.key === "x" || k.key === "*" || k.key === "/") store(k.key);
}

