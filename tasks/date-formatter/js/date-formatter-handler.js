function findCommonDataElements(dateClass, regexpClass, containerClass){
    const date = document.getElementsByClassName(dateClass)[0].value;
    const regexp = document.getElementsByClassName(regexpClass)[0].value;
    const resultContainer = document.getElementsByClassName(containerClass)[0];

    return {date, regexp, resultContainer};
}

function handleIsoDate(e){
    const dataElements = findCommonDataElements("iso-date__input-date", "iso-date__input-regexp",
        "iso-date__result-container");

    console.log(dataElements);
    try{
        dataElements.resultContainer.innerHTML = dateDisplayFormatter.convertToISO(dataElements.date, dataElements.regexp);
    }
    catch(e){
        dataElements.resultContainer.innerHTML = e.message;
    }
}

function handleCustomLocaleDate(e){
    const options = new Map();
    options.set("string-month", { month: 'long', day: 'numeric', year : 'numeric' });
    options.set("numeric-month", { month: 'numeric', day: 'numeric', year : 'numeric' });

    const dataElements = findCommonDataElements("date-custom-locale__input-date",
        "date-custom-locale__input-regexp",
        "date-custom-locale__result-container");
    const locale = document.getElementsByClassName("date-custom-locale__select-locale")[0].value;
    const monthOption = document.getElementsByClassName("date-custom-locale__select-options")[0].value;
    const option = options.get(monthOption) ?? { month: 'numeric', day: 'numeric', year : 'numeric' };

    try{
        dataElements.resultContainer.innerHTML = dateDisplayFormatter.formatToCustomLocale(dataElements.date, dataElements.regexp, locale , option);
    }
    catch(e){
        dataElements.resultContainer.innerHTML = e.message;
    }
}

function handleCustomFormatDate(e){
    const dataElements = findCommonDataElements("date-custom-format__input-date", "date-custom-format__input-regexp",
        "date-custom-format__result-container");
    const resultRegexp = document.getElementsByClassName("date-custom-format__result-regexp")[0].value;
    const monthOption = document.getElementsByClassName("date-custom-format__select-options")[0].value;

    const option = monthOption !== "string-month";
    try{
        dataElements.resultContainer.innerHTML = dateDisplayFormatter.convertToCustomFormat(dataElements.date, dataElements.regexp, resultRegexp , option);
    }
    catch(e){
        dataElements.resultContainer.innerHTML = e.message;
    }
}

function handleDateFromNow(e){
    const dataElements = findCommonDataElements("date-from-now__input-date", "date-from-now__input-regexp",
        "date-from-now__result-container");

    try{
        dataElements.resultContainer.innerHTML = dateDisplayFormatter.fromNow(dataElements.date, dataElements.regexp);
    }
    catch(e){
        dataElements.resultContainer.innerHTML = e.message;
    }
}


document.getElementsByClassName("iso-date__button")[0].addEventListener("click", handleIsoDate);
document.getElementsByClassName("date-custom-locale__button")[0].addEventListener("click", handleCustomLocaleDate);
document.getElementsByClassName("date-custom-format__button")[0].addEventListener("click", handleCustomFormatDate);
document.getElementsByClassName("date-from-now__button")[0].addEventListener("click", handleDateFromNow);
