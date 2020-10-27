"use strict";

function handleStringCalculator(e) {
  var expression = document.getElementsByClassName("caching-calculator__input-string")[0].value;
  var resultContainer = document.getElementsByClassName("caching-calculator__result-container")[0];

  try {
    var result = cachingCalculator.calculate(expression);

    if (!result) {
      throw new Error(e);
    }

    resultContainer.innerHTML = "".concat(result.result, "<br/>Source: ").concat(result.source);
  } catch (e) {
    resultContainer.innerHTML = "This expression is not supported.";
  }
}

function handleSetCacheLength(e) {
  var length = document.getElementsByClassName("caching-calculator__input-cache-length")[0].value;
  var resultContainer = document.getElementsByClassName("caching-calculator__cache-length-container")[0];

  try {
    if (length <= 0) {
      throw new Error("Invalid cache length");
    }

    var result = cachingCalculator.maxCacheLength = length;

    if (!result) {
      throw new Error(e);
    }

    resultContainer.innerHTML = "New cache length is ".concat(length);
  } catch (e) {
    resultContainer.innerHTML = e.message;
  }
}

function handleAddExpressionToCache(e) {
  var expression = document.getElementsByClassName("caching-calculator__input-cache")[0].value;
  var resultContainer = document.getElementsByClassName("caching-calculator__cache-container")[0];

  try {
    cachingCalculator.addExpressionToCache(expression);
    resultContainer.innerHTML = "".concat(expression, " was added to cache!");
  } catch (e) {
    resultContainer.innerHTML = e.message;
  }
}

document.getElementsByClassName("caching-calculator__button")[0].addEventListener("click", handleStringCalculator);
document.getElementsByClassName("caching-calculator__cache-length-button")[0].addEventListener("click", handleSetCacheLength);
document.getElementsByClassName("caching-calculator__cache-button")[0].addEventListener("click", handleAddExpressionToCache);