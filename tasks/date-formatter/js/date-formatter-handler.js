function handleIsoDate(e){
    const date = document.getElementsByClassName("iso-date__input-date")[0].value;
    const regexp = document.getElementsByClassName("iso-date__input-regexp")[0].value;
    const resultContainer = document.getElementsByClassName("iso-date__result-container")[0];
    try{
        resultContainer.innerHTML = dateDisplayFormatter.convertToISO(date, regexp);
    }
    catch(e){
        resultContainer.innerHTML = e.message;
    }
}

function handleCustomLocaleDate(e){
    const options = new Map();
    options.set("string-month", { month: 'long', day: 'numeric', year : 'numeric' });
    options.set("numeric-month", { month: 'numeric', day: 'numeric', year : 'numeric' });

    const date = document.getElementsByClassName("date-custom-locale__input-date")[0].value;
    const regexp = document.getElementsByClassName("date-custom-locale__input-regexp")[0].value;
    const locale = document.getElementsByClassName("date-custom-locale__select-locale")[0].value;
    const monthOption = document.getElementsByClassName("date-custom-locale__select-options")[0].value;
    const resultContainer = document.getElementsByClassName("date-custom-locale__result-container")[0];

    const option = options.get(monthOption) ?? { month: 'numeric', day: 'numeric', year : 'numeric' };
    try{
        resultContainer.innerHTML = dateDisplayFormatter.formatToCustomLocale(date, regexp, locale , option);
    }
    catch(e){
        resultContainer.innerHTML = e.message;
    }
}

function handleCustomFormatDate(e){

    const date = document.getElementsByClassName("date-custom-format__input-date")[0].value;
    const regexp = document.getElementsByClassName("date-custom-format__input-regexp")[0].value;
    const resultRegexp = document.getElementsByClassName("date-custom-format__result-regexp")[0].value;
    const monthOption = document.getElementsByClassName("date-custom-format__select-options")[0].value;
    const resultContainer = document.getElementsByClassName("date-custom-format__result-container")[0];

    const option = monthOption !== "string-month";
    try{
        resultContainer.innerHTML = dateDisplayFormatter.convertToCustomFormat(date, regexp, resultRegexp , option);
    }
    catch(e){
        resultContainer.innerHTML = e.message;
    }
}

function handleDateFromNow(e){
    const date = document.getElementsByClassName("date-from-now__input-date")[0].value;
    const regexp = document.getElementsByClassName("date-from-now__input-regexp")[0].value;
    const resultContainer = document.getElementsByClassName("date-from-now__result-container")[0];

    try{
        resultContainer.innerHTML = dateDisplayFormatter.fromNow(date, regexp);
    }
    catch(e){
        resultContainer.innerHTML = e.message;
    }
}


document.getElementsByClassName("iso-date__button")[0].addEventListener("click", handleIsoDate);
document.getElementsByClassName("date-custom-locale__button")[0].addEventListener("click", handleCustomLocaleDate);
document.getElementsByClassName("date-custom-format__button")[0].addEventListener("click", handleCustomFormatDate);
document.getElementsByClassName("date-from-now__button")[0].addEventListener("click", handleDateFromNow);
