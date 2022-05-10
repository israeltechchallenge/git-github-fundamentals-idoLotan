let isBtn = document.getElementById("isBtn");

let GITHUB_URL = "";

function sendInput() {
  let inputNum = document.getElementById("inputNum");
  let stringinput = `http://localhost:5050/fibonacci/${String(inputNum.value)}`;
  console.log(stringinput);

  fetch(stringinput)
    .then(function (response) {
      return response.json();
    })

    .then(function (data) {
      // get my name and profile image  from my github profile

      function showResults() {
        console.log(inputNum.value);
        document.getElementById("output").innerText = data.result;
      }
      showResults();
    })
    .catch((error) => {
      if (inputNum.value == 42) {
        document.getElementById("output").innerText =
          "Server Error: 42 is the meaning of life";
        document.getElementById("output").classList.add("meaning-of-life-eror");
      } else if (inputNum.value > 50) {
        document.getElementById("inputNum").classList.add("red-alert"),
          (document.getElementById("output").innerText =
            "Can't be larger then 50"),
          document.getElementById("output").classList.add("red-alert-prop");
      } else {
        document.getElementById("output").innerText = "general eror";
      }
    });
}

document.getElementById("spinner").style.display = "block";
isBtn.addEventListener("click", sendInput);

function initialState() {
  document.getElementById("spinner").style.display = "none";
  document.getElementById("output").style.display = "block";
}

function finalState() {
  document.getElementById("spinner").style.display = "block";
  document.getElementById("output").style.display = "none";
  fibonacciResults = fibonaciNumber();
}

initialState();

isBtn.addEventListener("click", finalState);

// card animation

// function showResults() {
//   document.getElementById("output").innerText = fibonaciNumber(inputNum);
// }

// isBtn.addEventListener("click", showResults);
