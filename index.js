const inputElement = document.getElementById("input");
const resultElement = document.getElementById("result");
const errorElement = document.getElementById("error");
let errorTime;
let resultTime;

function handleInput() {
  if (inputElement.value <= 0 || isNaN(inputElement.value)) {
    errorElement.innerText = "Invalid Number!";
    clearTimeout(errorTime);
    errorTime = setTimeout(() => {
      errorElement.innerText = "";
      inputElement.value = "";
    }, 2000);
  } else {
    resultElement.innerText = `${inputElement.value} = ${
      +inputElement.value / 2.2
    }kg`;
    clearTimeout(resultTime);
    resultTime = setTimeout(() => {
      resultElement.innerText = "";
      inputElement.value = "";
    }, 5000);
  }
}

inputElement.addEventListener("input", handleInput);
