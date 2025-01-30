const one = document.querySelector(".item#one")

one.addEventListener("click", () => {
    tempNum += "1";

    screenNum(tempNum);
});

const two = document.querySelector(".item#two")

two.addEventListener("click", () => {
    tempNum += "2";

    screenNum(tempNum);
});