let tempNum = "";
let defaultNum = "0";

function screenNum(num) {
    const screen = document.querySelector(".screen");
     if (num === "") {
        num = defaultNum;
     }
    screen.value = num;
}

function makeClickNumber() {
    for (let i = 0; i <= 10; i++) {
        if (i === 0) {
            let numsi = document.querySelector(".item-number#num" + i);

            numsi.addEventListener("click", () => {
                if (tempNum === "" || tempNum === "0") {
                    tempNum = "";
                } else {
                    tempNum += `${i}`;
                    screenNum(tempNum);
                }
            });
        } else {
            let numsi = document.querySelector(".item-number#num" + i);

            numsi.addEventListener("click", () => {
                tempNum += `${i}`;

                screenNum(tempNum);
            });
        }
    }
}

function operate(value) {
    const result = eval(value);
    return result
}

document.addEventListener("DOMContentLoaded", () => {
    screenNum(defaultNum);
    makeClickNumber();
});

const reset = document.querySelector(".item#reset");

reset.addEventListener("click", () => {
    tempNum = "";

    screenNum(defaultNum);
});

const deleteB = document.querySelector(".item#delete");

deleteB.addEventListener("click", () => {
    tempNum = tempNum.slice(0, -1);
    screenNum(tempNum);

    if (tempNum === "") {
        tempNum = "";
        screenNum(tempNum);
    }
});

const plusminus = document.querySelector(".item#plusminus");

plusminus.addEventListener("click", () => {
    if (tempNum.includes("-")) {
        tempNum = tempNum.substring(1);
        screenNum(tempNum);
    } else if (tempNum === "") {
        tempNum = "0"
        tempNum = "-" + tempNum;
        screenNum(tempNum);
    } else {
        tempNum = "-" + tempNum;
        screenNum(tempNum);
    }
});

const divided = document.querySelector(".item#divided");

divided.addEventListener("click", () => {
    if (tempNum.includes("+") || tempNum.includes("-") ||
        tempNum.includes("/") || tempNum.includes("*")) {
        let num = operate(tempNum);
        tempNum = num + " / ";
        screenNum(tempNum);
    } else {
        tempNum += " / ";
        screenNum(tempNum);
    }
});

const multiply = document.querySelector(".item#multiply");

multiply.addEventListener("click", () => {
    if (tempNum.includes("+") || tempNum.includes("-") ||
        tempNum.includes("/") || tempNum.includes("*")) {
        let num = operate(tempNum);
        tempNum = num + " * ";
        screenNum(tempNum);
    } else {
        tempNum += " * ";
        screenNum(tempNum);
    }
});

const subtract = document.querySelector(".item#subtract");

subtract.addEventListener("click", () => {
    if (tempNum.includes("+") || tempNum.includes("-") ||
        tempNum.includes("/") || tempNum.includes("*")) {
        let num = operate(tempNum);
        tempNum = num + " - ";
        screenNum(tempNum);
    } else {
        tempNum += " - ";
        screenNum(tempNum);
    }
});

const add = document.querySelector(".item#add");

add.addEventListener("click", () => {
    if (tempNum.includes("+") || tempNum.includes("-") ||
        tempNum.includes("/") || tempNum.includes("*")) {
        let num = operate(tempNum);
        tempNum = num + " + ";
        screenNum(tempNum);
    } else {
        tempNum += " + ";
        screenNum(tempNum);
    }
});

const comma = document.querySelector(".item#comma");

comma.addEventListener("click", () => {
    if (tempNum.includes(".")) {
        tempNum += "";
    } else {
        tempNum += ".";
    }

    screenNum(tempNum);
});

const equal = document.querySelector(".item#result");

equal.addEventListener("click", () => {
    if (tempNum.includes("+") || tempNum.includes("-") ||
        tempNum.includes("/") || tempNum.includes("*")) {
        let num = operate(tempNum);
        tempNum = num.toString();
        screenNum(tempNum);
    } else {
        tempNum += "";
        screenNum(tempNum);
    }
});

const display = document.querySelector(".screen");

display.addEventListener("input", () => {
    tempNum = display.value.toString();
    screenNum(tempNum);
});