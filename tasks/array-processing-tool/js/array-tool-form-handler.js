function findDataElements(arrayClass, resultContainerClass){
    let array = document.getElementsByClassName(arrayClass)[0].value;
    array = array.trim() !== "" ? array.split(",").map(item => +item) : [];

    const resultContainer = document.getElementsByClassName(resultContainerClass)[0];

    return {array, resultContainer};
}

function handleMaxSumO1(arrayClass, resultContainerClass){
    const dataElements = findDataElements(arrayClass, resultContainerClass);
    dataElements.resultContainer.innerHTML = arrayTool.getMaxSubSumO1(dataElements.array);
}

function handleMaxSumO2(arrayClass, resultContainerClass){
    const dataElements = findDataElements(arrayClass, resultContainerClass);
    dataElements.resultContainer.innerHTML = arrayTool.getMaxSubSumO2(dataElements.array);
}

function handleFindMax(arrayClass, resultContainerClass){
    const dataElements = findDataElements(arrayClass, resultContainerClass);
    dataElements.resultContainer.innerHTML = arrayTool.findMax(dataElements.array);
}

function handleFindMin(arrayClass, resultContainerClass){
    const dataElements = findDataElements(arrayClass, resultContainerClass);
    dataElements.resultContainer.innerHTML = arrayTool.findMin(dataElements.array);
}

function handleFindMedian(arrayClass, resultContainerClass){
    const dataElements = findDataElements(arrayClass, resultContainerClass);
    dataElements.resultContainer.innerHTML = arrayTool.findMedian(dataElements.array);
}

function handleMaxSequence(arrayClass, resultContainerClass){
    const dataElements = findDataElements(arrayClass, resultContainerClass);
    dataElements.resultContainer.innerHTML = arrayTool.maxAscendingSequence(dataElements.array);
}