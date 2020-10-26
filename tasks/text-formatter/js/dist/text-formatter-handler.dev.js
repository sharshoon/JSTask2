"use strict";

function handleTextFormat(e) {
  var text = document.getElementsByClassName("text-formatter__input-text")[0].value;
  var maxTextLength = document.getElementsByClassName("text-formatter__input-max-text")[0].value;
  var maxLineLength = document.getElementsByClassName("text-formatter__input-max-line")[0].value;
  var wrapOption = document.getElementsByClassName("text-formatter__select-mode")[0].value;
  var resultContainer = document.getElementsByClassName("text-formatter__result-container")[0];

  try {
    if (maxTextLength < 0) {
      throw new Error("Max Text Length should be more than zero");
    }

    if (maxLineLength < 0) {
      throw new Error("Max Line Length should be more than zero");
    }

    var result = textFormatter.formatText(text, maxTextLength || undefined, maxLineLength || undefined, wrapOption); // I think it would be wrong to immediately write <br/> in the text formatting function, because it becomes less universal

    resultContainer.innerHTML = result.replaceAll("\n", "<br/>");
  } catch (e) {
    resultContainer.innerHTML = e.message;
  }
}

document.getElementsByClassName("text-formatter__button")[0].addEventListener("click", handleTextFormat);