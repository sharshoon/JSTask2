function handleStringCalculator(expressionClass, resultContainerClass){
    const expression = document.getElementsByClassName(expressionClass)[0].value;
    const resultContainer = document.getElementsByClassName(resultContainerClass)[0];

    try{
        const result = stringCalculator.calculate(expression);
        resultContainer.innerHTML = result;
    }
    catch(e){
        resultContainer.innerHTML = "This expression is not supported." ;
    }
}
