function handleBinToDecConverter(e){
    const number = document.getElementsByClassName("bin-to-dec__input")[0].value.split(",");
    const resultContainer = document.getElementsByClassName("bin-to-dec__result-container")[0];

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

function handleDecToBinConverter(e){
    const number = document.getElementsByClassName("dec-to-bin__input")[0].value.split(",");
    const resultContainer = document.getElementsByClassName("dec-to-bin__result-container")[0];

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

function handleCustomConverter(e){
    const number = document.getElementsByClassName("custom-converter__input")[0].value.split(",");
    const sourceNotation = document.getElementsByClassName("custom-converter__input-source-notation")[0].value;
    const destNotation = document.getElementsByClassName("custom-converter__input-dest-notation")[0].value;
    const resultContainer = document.getElementsByClassName("custom-converter__result-container")[0];

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

document.getElementsByClassName("custom-converter__button")[0].addEventListener("click", handleCustomConverter);
document.getElementsByClassName("bin-to-dec__button")[0].addEventListener("click", handleBinToDecConverter);
document.getElementsByClassName("dec-to-bin__button")[0].addEventListener("click", handleDecToBinConverter);