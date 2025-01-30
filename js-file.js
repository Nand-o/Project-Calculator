let tempNum = "";
let defaultNum = "0";
let num1 = 0;
let num2 = 0;
let firstOperand = null;
let secondOperand = null;


function screenNum(num) {
    const screen = document.querySelector(".screen");

    screen.textContent = parseFloat(num);
}

function makeClickNumber() {
    for (let i = 0; i <= 10; i++) {
        if (i === 0) {
            let numsi = document.querySelector(".item-number#num" + i);

            numsi.addEventListener("click", () => {
                if (tempNum === "" || tempNum === "0") {
                    tempNum = "";
                } else {
                    tempNum += i;
                    screenNum(tempNum);
                }
            });
        } else {
            let numsi = document.querySelector(".item-number#num" + i);

            numsi.addEventListener("click", () => {
                tempNum += i;

                screenNum(tempNum);
            });
        }
    }
}

// function operate (firstNum, secNum, operand) {
//     if (operand === "/") {
//         result = firstNum / secNum;
//         tempNum = "";
//         tempNum += result;
//         screenNum(tempNum);
//     }

// }

document.addEventListener("DOMContentLoaded", () => {
    screenNum(defaultNum);
    makeClickNumber();
});

const reset = document.querySelector(".item#reset");

reset.addEventListener("click", () => {
    tempNum = "";

    screenNum(defaultNum);
});

const plusminus = document.querySelector(".item#plusminus");

plusminus.addEventListener("click", () => {
    if (tempNum.includes("-")) {
        tempNum = tempNum.substring(1);
        screenNum(tempNum);
    } else {
        tempNum = "-" + tempNum;
        screenNum(tempNum);
    }
});

const persen = document.querySelector(".item#persen");

persen.addEventListener("click", () => {
    if (tempNum === "") {
        screenNum(defaultNum);
    } else {
        num = parseInt(tempNum);

        result = parseFloat(num / 100);
        tempNum = "";
        tempNum += result;
        screenNum(tempNum);
    }
});

const divided = document.querySelector(".item#divided");

divided.addEventListener("click", () => {
    
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
