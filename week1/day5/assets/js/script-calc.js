let $buttons = document.querySelectorAll("button");
let ui = document.querySelector(".userEntry");
let finalCalc = document.querySelector(".finalCalc");
let opPressed = false;

let valOne = [];
let valTwo = [];
var operator = [];
let finalAnswer = 0;

document.addEventListener("keydown", (event) => {
  if (event.key == "0") {
    valOne.push(0);
    ui.textContent = valOne.join("");
  } else if (event.key == "1") {
    valOne.push(1);
    ui.textContent = valOne.join("");
  } else if (event.key == "2") {
    valOne.push(2);
    ui.textContent = valOne.join("");
  } else if (event.key == "3") {
    valOne.push(3);
    ui.textContent = valOne.join("");
  } else if (event.key == "4") {
    valOne.push(4);
    ui.textContent = valOne.join("");
  } else if (event.key == "5") {
    valOne.push(5);
    ui.textContent = valOne.join("");
  } else if (event.key == "6") {
    valOne.push(6);
    ui.textContent = valOne.join("");
  } else if (event.key == "7") {
    valOne.push(7);
    ui.textContent = valOne.join("");
  } else if (event.key == "8") {
    valOne.push(8);
    ui.textContent = valOne.join("");
  } else if (event.key == "9") {
    valOne.push(9);
    ui.textContent = valOne.join("");
  } else if (event.key == "Backspace") {
    removeNumber();
  }
});

[...$buttons].map((x) => {
  x.addEventListener("click", function (e) {
    switch (this.innerHTML) {
      case "RESET":
        clearDisplay();
        break;
      case "DEL":
        removeNumber();
        break;
      case "=":
        makeCalculation();
        break;
      case "+":
        operator.splice(0, 1, this.innerHTML);
        console.log(operator);

        storeValue();
        break;
      case "*":
        operator.splice(0, 1, this.innerHTML);
        console.log(operator);

        storeValue();
        break;
      case "/":
        operator.splice(0, 1, this.innerHTML);
        console.log(operator);

        storeValue();
        break;
      case "-":
        operator.splice(0, 1, this.innerHTML);
        console.log(operator);
        storeValue();
        break;
      default:
        if (ui.innerHTML === "0") {
          clearDisplay();
        } else if (valOne.length > 11) {
          alert("No more values beyond 8");
        } else {
          valOne.push(this.innerText);
          ui.textContent = valOne.join("");
          console.log(valOne);
        }
        break;
      case ".":
        if (valOne.includes(".")) {
          alert("You cannot use anymore decimals");
        } else {
          valOne.push(this.innerText);
          ui.textContent = valOne.join("");
        }
        break;
    }
  });
});

function clearDisplay() {
  ui.textContent = "";
  finalCalc.textContent = "";
  valOne = [];
  valTwo = [];
  operator = [];
}

function removeNumber(e) {
  valOne.pop();
  ui.textContent = valOne.join("");
}


function makeCalculation() {
  if (valTwo.length > 0 && operator.length !== 0) {
    //finalAnswer = valTwo.concat(operator, valOne).join("");
    finalAnswer = eval(valTwo + operator + valOne.join(""));
    finalCalc.textContent = "";
    finalCalc.textContent = eval(finalAnswer);
    ui.textContent = "";
    valTwo = eval(finalAnswer);
    valOne = [];
    //operator = [];
  } else if (operator.length == 0) {
    alert("invalid calculation there is no operator");
  } else {
    //finalAnswer = valTwo.concat(operator, valOne).join
    finalAnswer = finalAnswer = eval(valTwo + operator + valOne.join(""));

    console.log("final answer");
    console.log(finalAnswer);
    finalCalc.textContent = "";
    ui.textContent = "";
    finalCalc.textContent = eval(finalAnswer);
    //operator = [];
    valTwo = eval(finalAnswer);
    valOne = [];
  }
}

function storeValue() {
  if (valOne.length == 0 && valTwo.length == 0) {
    return false;
  } else if (valTwo.length > 0) {
    finalCalc.textContent = valTwo + " " + operator;
  } else if (valTwo.length == 0) {
    valTwo.push(valOne.join(""));
    valOne = [];
    ui.textContent = "";
    finalCalc.textContent = "";
    finalCalc.textContent = valTwo + " " + operator;
  }
  finalCalc.textContent = valTwo + " " + operator;
}
