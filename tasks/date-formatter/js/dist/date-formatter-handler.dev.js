"use strict";

function handleIsoDate(e) {
  var date = document.getElementsByClassName("iso-date__input-date")[0].value;
  var regexp = document.getElementsByClassName("iso-date__input-regexp")[0].value;
  var resultContainer = document.getElementsByClassName("iso-date__result-container")[0];
  resultContainer.innerHTML = dateDisplayFormatter.convertToISO(date, regexp);
}

function handleCustomLocaleDate(e) {
  var options = new Map();
  options.set("string-month", {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  options.set("numeric-month", {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric'
  });
  var date = document.getElementsByClassName("date-custom-locale__input-date")[0].value;
  var regexp = document.getElementsByClassName("date-custom-locale__input-regexp")[0].value;
  var locale = document.getElementsByClassName("date-custom-locale__select-locale")[0].value;
  var monthOption = document.getElementsByClassName("date-custom-locale__select-options")[0].value;
  var resultContainer = document.getElementsByClassName("date-custom-locale__result-container")[0];
  var option = options.get(monthOption);
  resultContainer.innerHTML = dateDisplayFormatter.formatToCustomLocale(date, regexp, locale, options.get(option));
}

document.getElementsByClassName("iso-date__button")[0].addEventListener("click", handleIsoDate);
document.getElementsByClassName("date-custom-locale__button")[0].addEventListener("click", handleCustomLocaleDate);
document.getElementsByClassName("find-max__button")[0].addEventListener("click", handleFindMax);
document.getElementsByClassName("find-min__button")[0].addEventListener("click", handleFindMin);
document.getElementsByClassName("find-median__button")[0].addEventListener("click", handleFindMedian);