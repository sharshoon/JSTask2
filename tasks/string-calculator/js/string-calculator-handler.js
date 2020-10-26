function handleStringCalculator(e){
    const expression = document.getElementsByClassName("string-calculator__input-string")[0].value;
    const resultContainer = document.getElementsByClassName("string-calculator__result-container")[0];

    try{
        const result = stringCalculator.calculate(expression);

        if(!result){
            throw new Error();
        }

        resultContainer.innerHTML = result;
    }
    catch(e){
        resultContainer.innerHTML = "This expression is not supported." ;
    }
}

document.getElementsByClassName("string-calculator__button")[0].addEventListener("click", handleStringCalculator);
