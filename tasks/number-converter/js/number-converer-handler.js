function handleBinToDecConverter(numberClass, resultContainerClass){
    const number = document.getElementsByClassName(numberClass)[0].value.split(",");
    const resultContainer = document.getElementsByClassName(resultContainerClass)[0];

    try{
        const result = numberConverter.binaryToDecimal(number);
        if(!result){
            throw new InvalidNumberError("Invalid data");
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
        if(number.some(digit => digit != "0" && digit != "1")){
            throw new InvalidNumberError("Invalid input");
        }
        const result = numberConverter.decimalToBinary(number);
        if(!result){
            throw new InvalidNumberError("Invalid data");
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
        if(number.some(e => e.length !== 1)){
            throw new InvalidNumberError("Invalid number input");
        }

        if(isNaN(parseInt(sourceNotation))){
            throw new InvalidNumberError("Invalid source notation input");
        }

        if(isNaN(parseInt(destNotation))){
            throw new InvalidNumberError("Invalid dest notation input");
        }

        const result = numberConverter.customToCustom(number, sourceNotation, destNotation);
        if(!result){
            throw new InvalidNumberError("Invalid data");
        }
        resultContainer.innerHTML = result;
    }
    catch(e){
        resultContainer.innerHTML = e.message;
    }
}