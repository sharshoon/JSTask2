"use strict";

function handleStringCalculator(e) {
  var expression = document.getElementsByClassName("string-calculator__input-string")[0].value;
  var resultContainer = document.getElementsByClassName("string-calculator__result-container")[0];

  try {
    var result = stringCalculator.calculate(expression);

    if (!result) {
      throw new Error();
    }

    resultContainer.innerHTML = result;
  } catch (e) {
    resultContainer.innerHTML = "This expression is not supported.";
  }
}

document.getElementsByClassName("string-calculator__button")[0].addEventListener("click", handleStringCalculator);