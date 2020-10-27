function handleStringCalculator(e){
    const expression = document.getElementsByClassName("caching-calculator__input-string")[0].value;
    const resultContainer = document.getElementsByClassName("caching-calculator__result-container")[0];

    try{
        const result = cachingCalculator.calculate(expression);

        if(!result){
            throw new Error(e);
        }

        resultContainer.innerHTML = `${result.result}<br/>Source: ${result.source}`;
    }
    catch(e){
        resultContainer.innerHTML = "This expression is not supported.";
    }
}

function handleSetCacheLength(e){
    const length = document.getElementsByClassName("caching-calculator__input-cache-length")[0].value;
    const resultContainer = document.getElementsByClassName("caching-calculator__cache-length-container")[0];

    try{
        if(length <= 0){
            throw new Error("Invalid cache length")
        }
        const result = cachingCalculator.maxCacheLength = length;

        if(!result){
            throw new Error(e);
        }

        resultContainer.innerHTML = `New cache length is ${length}`;
    }
    catch(e){
        resultContainer.innerHTML = e.message;
    }
}

function handleAddExpressionToCache(e){
    const expression = document.getElementsByClassName("caching-calculator__input-cache")[0].value;
    const resultContainer = document.getElementsByClassName("caching-calculator__cache-container")[0];

    try{
        cachingCalculator.addExpressionToCache(expression);
        resultContainer.innerHTML = `${expression} was added to cache!`;
    }
    catch(e){
        resultContainer.innerHTML = e.message;
    }
}

document.getElementsByClassName("caching-calculator__button")[0].addEventListener("click", handleStringCalculator);
document.getElementsByClassName("caching-calculator__cache-length-button")[0].addEventListener("click", handleSetCacheLength);
document.getElementsByClassName("caching-calculator__cache-button")[0].addEventListener("click", handleAddExpressionToCache);
