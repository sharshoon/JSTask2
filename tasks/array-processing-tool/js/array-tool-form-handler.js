function findDataElements(arrayName, resultContainerName){
    let array = document.getElementsByClassName(arrayName)[0].value;
    array = array.trim() !== "" ? array.split(",").map(item => +item) : [];

    const resultContainer = document.getElementsByClassName(resultContainerName)[0];

    return {array, resultContainer};
}

function handleMaxSumO1(e){
    const dataElements = findDataElements("max-sum1__input", "max-sum1__result-container");
    dataElements.resultContainer.innerHTML = arrayTool.getMaxSubSumO1(dataElements.array);
}

function handleMaxSumO2(e){
    const dataElements = findDataElements("max-sum2__input", "max-sum2__result-container");
    dataElements.resultContainer.innerHTML = arrayTool.getMaxSubSumO2(dataElements.array);
}

function handleFindMax(e){
    const dataElements = findDataElements("find-max__input", "find-max__result-container");
    dataElements.resultContainer.innerHTML = arrayTool.findMax(dataElements.array);
}

function handleFindMin(e){
    const dataElements = findDataElements("find-min__input", "find-min__result-container");
    dataElements.resultContainer.innerHTML = arrayTool.findMin(dataElements.array);
}

function handleFindMedian(e){
    const dataElements = findDataElements("find-median__input", "find-median__result-container");
    dataElements.resultContainer.innerHTML = arrayTool.findMedian(dataElements.array);
}

function handleMaxSequence(e){
    const dataElements = findDataElements("max-sequence__input", "max-sequence__result-container");
    dataElements.resultContainer.innerHTML = arrayTool.maxAscendingSequence(dataElements.array);
}

document.getElementsByClassName("max-sum1__button")[0].addEventListener("click", handleMaxSumO1);
document.getElementsByClassName("max-sum2__button")[0].addEventListener("click", handleMaxSumO2);
document.getElementsByClassName("find-max__button")[0].addEventListener("click", handleFindMax);
document.getElementsByClassName("find-min__button")[0].addEventListener("click", handleFindMin);
document.getElementsByClassName("find-median__button")[0].addEventListener("click", handleFindMedian);
document.getElementsByClassName("max-sequence__button")[0].addEventListener("click", handleMaxSequence);