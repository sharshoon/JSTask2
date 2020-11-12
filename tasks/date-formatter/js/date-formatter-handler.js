function findCommonDataElements(dateClass, regexpClass, containerClass, typeClass){
    const date = document.getElementsByClassName(dateClass)[0].value;
    const regexp = document.getElementsByClassName(regexpClass)[0].value;
    const resultContainer = document.getElementsByClassName(containerClass)[0];
    const dateType = document.getElementsByClassName(typeClass)[0].value;

    return {date, regexp, resultContainer, dateType};
}

function checkDateParams(regexp, dateType){
    if(regexp && dateType === "number"){
        throw new InvalidArgumentError("Regex cannot be applied to the value in ticks. " +
            "If you want to use a numeric value, leave the regex field empty!")
    }
}

function handleIsoDate(dateClass, regexpClass, containerClass, typeClass){
    const dataElements = findCommonDataElements(dateClass, regexpClass, containerClass, typeClass);
    try{
        checkDateParams(dataElements.regexp, dataElements.dateType);
        dataElements.resultContainer.innerHTML = dateDisplayFormatter.convertToISO(dataElements.date, dataElements.regexp,
            dataElements.dateType);
    }
    catch(e){
        dataElements.resultContainer.innerHTML = e.message;
    }
}

function handleCustomLocaleDate(dateClass, regexpClass, containerClass, localeClass, monthOptionClass, typeClass){
    const dataElements = findCommonDataElements(dateClass, regexpClass, containerClass, typeClass);
    const locale = document.getElementsByClassName(localeClass)[0].value;
    const monthOption = document.getElementsByClassName(monthOptionClass)[0].value;
    const option = options.get(monthOption) ?? { month: 'numeric', day: 'numeric', year : 'numeric' };

    try{
        checkDateParams(dataElements.regexp, dataElements.dateType);
        dataElements.resultContainer.innerHTML = dateDisplayFormatter.formatToCustomLocale(dataElements.date,
            dataElements.regexp, locale , option, dataElements.dateType);
    }
    catch(e){
        dataElements.resultContainer.innerHTML = e.message;
    }
}

function handleCustomFormatDate(dateClass, regexpClass, containerClass, resultRegexpClass, monthOptionClass, typeClass){
    const dataElements = findCommonDataElements(dateClass, regexpClass, containerClass, typeClass);
    const resultRegexp = document.getElementsByClassName(resultRegexpClass)[0].value;
    const monthOption = document.getElementsByClassName(monthOptionClass)[0].value;

    const option = monthOption !== OPTION_STRING_MONTH;
    try{
        checkDateParams(dataElements.regexp, dataElements.dateType);
        dataElements.resultContainer.innerHTML = dateDisplayFormatter
            .convertToCustomFormat(dataElements.date, dataElements.regexp || undefined,
                resultRegexp || undefined, option, dataElements.dateType);
    }
    catch(e){
        dataElements.resultContainer.innerHTML = e.message;
    }
}

function handleDateFromNow(dateClass, regexpClass, containerClass, typeClass){
    const dataElements = findCommonDataElements(dateClass, regexpClass, containerClass, typeClass);

    try{
        checkDateParams(dataElements.regexp, dataElements.dateType);
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
