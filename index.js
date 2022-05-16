document.getElementById("spinner").style.display = "none";
document.getElementById("spinner-down").style.display = "none";
isBtn = document.getElementById("isBtn");
let inputNum = document.getElementById("inputNum");
let fibonacciResults = 0;
let storedResults = "";

// fibonaci calculator

function fibonaciNumber(firstNum, secoundNum, thirdNum, x, y) {
  firstNum = 0;
  secoundNum = 1;
  thirdNum = 0;
  x = inputNum.value - 1;
  cleanUpCalculator();
  if (inputNum.value > 50) {
    return upperLimit();
  }
  if (inputNum.value == 42) {
    return meaningOfLifeEror();
  }
  for (i = 0; i < x; i++) {
    thirdNum = firstNum + secoundNum;
    firstNum = secoundNum;
    secoundNum = thirdNum;
  }

  y = thirdNum;
  document.getElementById("output").innerText = y;
  return y;
}

// display an eror when user put in value greater then 50

function upperLimit() {
  document.getElementById("inputNum").classList.add("red-alert"),
    (document.getElementById("output").innerText = "Can't be larger then 50"),
    document.getElementById("output").classList.add("red-alert-prop");
}

function cleanUpCalculator() {
  document.getElementById("inputNum").classList.remove("red-alert");
  document.getElementById("output").classList.remove("red-alert-prop");
  document.getElementById("output").classList.remove("meaning-of-life-eror");
}

function meaningOfLifeEror() {
  document.getElementById("output").innerText =
    "Server Error: 42 is the meaning of life";
  document.getElementById("output").classList.add("meaning-of-life-eror");
}

// spinner display for the displayed results (will be change soon)

// spinner display for stored results(will be change soon)
function initialState() {
  document.getElementById("spinner").style.display = "none";
  document.getElementById("output").style.display = "block";
}

function finalState() {
  document.getElementById("spinner").style.display = "block";
  document.getElementById("output").style.display = "none";
  myVar = setTimeout(initialState, 1000);
  fibonacciResults = fibonaciNumber();
}

isBtn.addEventListener("click", finalState);

let storedCalculation = [];

function createString() {
  let cube = {
    inputX: "",
    outputY: "",
    date: "",
  };
  let date = new Date().toLocaleString("en-US");
  cube.inputX = inputNum.value;
  cube.outputY = fibonacciResults.toString();
  cube.date = date;
  storedCalculation.push({ cube });
}

isBtn.addEventListener("click", createString);

function showResults() {
  let pastResults = document.getElementById("pastResults");
  clearResults();
  for (let i = 0; i < storedCalculation.length; i++) {
    let para = document.createElement(`p`);
    let calcValues = Object.values(storedCalculation[i].cube);
    let xVal = calcValues[0].bold();
    let yVal = calcValues[1].bold();
    let dateVal = calcValues[2];

    para.innerHTML =
      "The Fibonnaci Of " +
      xVal +
      " is " +
      yVal +
      " Calculated at: " +
      dateVal +
      " GMT+0200 (Israel Standard Time)";
    pastResults.appendChild(para);
  }
}

function clearResults() {
  const myNode = document.getElementById("pastResults");
  myNode.innerHTML = "";
}

function initialStore() {
  storedResults = showResults();
  document.getElementById("spinner-down").style.display = "none";
}

function finalStore() {
  document.getElementById("spinner-down").style.display = "block";
  myVar = setTimeout(initialStore, 1000);
}

let results = document.getElementById("results");
results.addEventListener("click", finalStore);

function selectorSort() {
  // let sortedArray = storedCalculation[0].cube.inputX.sort(function (a, b) {
  //   return a - b;
  // });
  // console.log(sortedArray);

  storedCalculation.sort((a, b) => {
    return a.cube.inputX - b.cube.inputX;
  });

  let selector = document.getElementById("selector");
  if (selector.value == "number Asc") {
    console.log(storedCalculation);
  } else {
    console.log("ff");
  }

  // for (let i = 0; i < array.length; i++) {
  //   storedCalculation[i].cube;

  //   });
}

let select = document.getElementById("selector");
select.addEventListener("click", selectorSort);

// let stringo = "hello".bold();

// document.getElementById("usedLang").innerHTML = stringo + "gg";

// function createString() {
//   date = new Date().toLocaleString("en-US");
//   storedCalculation.push(
//     `The Fibonnaci Of ${inputNum.value} is ${fibonacciResults}. Calculated at: ${date} GMT+0200 (Israel Standard Time) `
//   );
// }

// isBtn.addEventListener("click", createString);

// let results = document.getElementById("results");
// results.addEventListener("click", showResults);

// function showResults() {
//   for (let i = 0; i < storedCalculation.length; i++) {
//     let para = document.createElement(`p`);
//     para.innerText = storedCalculation[i];
//     pastResults.appendChild(para);
//   }
// }
