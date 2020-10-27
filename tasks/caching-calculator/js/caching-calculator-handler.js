function handleCachingCalculator(expressionClass, resultContainerClass){
    const expression = document.getElementsByClassName(expressionClass)[0].value;
    const resultContainer = document.getElementsByClassName(resultContainerClass)[0];

    try{
        const result = cachingCalculator.calculate(expression);

        resultContainer.innerHTML = `${result.result}<br/>Source: ${result.source}`;
    }
    catch(e){
        resultContainer.innerHTML = "This expression is not supported.";
    }
}

function handleSetCacheLength(lengthClass, resultContainerClass){
    const length = document.getElementsByClassName(lengthClass)[0].value;
    const resultContainer = document.getElementsByClassName(resultContainerClass)[0];

    try{
        if(length <= 0){
            throw new Error("Invalid cache length")
        }
        const result = cachingCalculator.maxCacheLength = length;

        if(!result){
            throw new Error("Invalid data");
        }

        resultContainer.innerHTML = `New cache length is ${length}`;
    }
    catch(e){
        resultContainer.innerHTML = e.message;
    }
}

function handleAddExpressionToCache(expressionClass, resultContainerClass){
    const expression = document.getElementsByClassName(expressionClass)[0].value;
    const resultContainer = document.getElementsByClassName(resultContainerClass)[0];

    try{
        cachingCalculator.addExpressionToCache(expression);
        resultContainer.innerHTML = `${expression} was added to cache!`;
    }
    catch(e){
        resultContainer.innerHTML = "Invalid expression";
    }
}
