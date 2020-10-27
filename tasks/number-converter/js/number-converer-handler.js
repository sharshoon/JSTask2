function handleBinToDecConverter(numberClass, resultContainerClass){
    const number = document.getElementsByClassName(numberClass)[0].value.split(",");
    const resultContainer = document.getElementsByClassName(resultContainerClass)[0];

    try{
        const result = numberConverter.binaryToDecimal(number);
        if(!result){
            throw new Error("Invalid data");
        }
        resultContainer.innerHTML = result;
    }
    catch(e){
        resultContainer.innerHTML = e.message;
    }
}

function handleDecToBinConverter(numberClass, resultContainerClass){
    const number = document.getElementsByClassName(numberClass)[0].value.split(",");
    const resultContainer = document.getElementsByClassName(resultContainerClass)[0];

    try{
        const result = numberConverter.decimalToBinary(number);
        if(!result){
            throw new Error("Invalid data");
        }
        resultContainer.innerHTML = result;
    }
    catch(e){
        resultContainer.innerHTML = e.message;
    }
}

function handleCustomConverter(numberClass, resultContainerClass,sourceNotationClass, destNotationClass){
    const number = document.getElementsByClassName(numberClass)[0].value.split(",");
    const sourceNotation = document.getElementsByClassName(sourceNotationClass)[0].value;
    const destNotation = document.getElementsByClassName(destNotationClass)[0].value;
    const resultContainer = document.getElementsByClassName(resultContainerClass)[0];

    try{
        const result = numberConverter.customToCustom(number, sourceNotation, destNotation);
        if(!result){
            throw new Error("Invalid data");
        }
        resultContainer.innerHTML = result;
    }
    catch(e){
        resultContainer.innerHTML = e.message;
    }
}