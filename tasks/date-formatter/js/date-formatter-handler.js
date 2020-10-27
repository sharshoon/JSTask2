function findCommonDataElements(dateClass, regexpClass, containerClass){
    const date = document.getElementsByClassName(dateClass)[0].value;
    const regexp = document.getElementsByClassName(regexpClass)[0].value;
    const resultContainer = document.getElementsByClassName(containerClass)[0];

    return {date, regexp, resultContainer};
}

function handleIsoDate(dateClass, regexpClass, containerClass){
    const dataElements = findCommonDataElements(dateClass, regexpClass, containerClass);

    try{
        dataElements.resultContainer.innerHTML = dateDisplayFormatter.convertToISO(dataElements.date, dataElements.regexp);
    }
    catch(e){
        dataElements.resultContainer.innerHTML = e.message;
    }
}

function handleCustomLocaleDate(dateClass, regexpClass, containerClass, localeClass, monthOptionClass){
    const dataElements = findCommonDataElements(dateClass, regexpClass, containerClass);
    const locale = document.getElementsByClassName(localeClass)[0].value;
    const monthOption = document.getElementsByClassName(monthOptionClass)[0].value;
    const option = options.get(monthOption) ?? { month: 'numeric', day: 'numeric', year : 'numeric' };

    try{
        dataElements.resultContainer.innerHTML = dateDisplayFormatter.formatToCustomLocale(dataElements.date, dataElements.regexp, locale , option);
    }
    catch(e){
        dataElements.resultContainer.innerHTML = e.message;
    }
}

function handleCustomFormatDate(dateClass, regexpClass, containerClass, resultRegexpClass, monthOptionClass){
    const dataElements = findCommonDataElements(dateClass, regexpClass, containerClass);
    const resultRegexp = document.getElementsByClassName(resultRegexpClass)[0].value;
    const monthOption = document.getElementsByClassName(monthOptionClass)[0].value;

    const option = monthOption !== OPTION_STRING_MONTH;
    try{
        dataElements.resultContainer.innerHTML = dateDisplayFormatter.convertToCustomFormat(dataElements.date, dataElements.regexp, resultRegexp , option);
    }
    catch(e){
        dataElements.resultContainer.innerHTML = e.message;
    }
}

function handleDateFromNow(dateClass, regexpClass, containerClass){
    const dataElements = findCommonDataElements(dateClass, regexpClass, containerClass);

    try{
        dataElements.resultContainer.innerHTML = dateDisplayFormatter.fromNow(dataElements.date, dataElements.regexp);
    }
    catch(e){
        dataElements.resultContainer.innerHTML = e.message;
    }
}

const OPTION_STRING_MONTH = "string-month";

const options = new Map();
options.set("string-month", { month: 'long', day: 'numeric', year : 'numeric' });
options.set("numeric-month", { month: 'numeric', day: 'numeric', year : 'numeric' });
