function findDataElements(arrayClass, resultContainerClass){
    let array = document.getElementsByClassName(arrayClass)[0].value;
    array = array.trim() !== "" ? array.split(",").map(item => parseInt(item)) : [];

    const resultContainer = document.getElementsByClassName(resultContainerClass)[0];
    console.log(array);
    return {array, resultContainer};
}

function tryGetResult(method, array, resultContainer){
    try {
        if(array.some(element => isNaN(element))){
            throw new Error("Invalid array");
        }
        const result = method(array);
        if(!result && result !== 0){
            throw new Error("Invalid array");
        }
        resultContainer.innerHTML = result;
    }
    catch (e){
        resultContainer.innerHTML = e.message;
    }
}

function handleMaxSumO1(arrayClass, resultContainerClass){
    const dataElements = findDataElements(arrayClass, resultContainerClass);
    tryGetResult(arrayTool.getMaxSubSumO1.bind(arrayTool), dataElements.array, dataElements.resultContainer);
}

function handleMaxSumO2(arrayClass, resultContainerClass){
    const dataElements = findDataElements(arrayClass, resultContainerClass);
    tryGetResult(arrayTool.getMaxSubSumO2.bind(arrayTool), dataElements.array, dataElements.resultContainer);
}

function handleFindMax(arrayClass, resultContainerClass){
    const dataElements = findDataElements(arrayClass, resultContainerClass);
    tryGetResult(arrayTool.findMax.bind(arrayTool), dataElements.array, dataElements.resultContainer);
}

function handleFindMin(arrayClass, resultContainerClass){
    const dataElements = findDataElements(arrayClass, resultContainerClass);
    tryGetResult(arrayTool.findMin.bind(arrayTool), dataElements.array, dataElements.resultContainer);
}

function handleFindMedian(arrayClass, resultContainerClass){
    const dataElements = findDataElements(arrayClass, resultContainerClass);
    tryGetResult(arrayTool.findMedian.bind(arrayTool), dataElements.array, dataElements.resultContainer);
}

function handleMaxSequence(arrayClass, resultContainerClass){
    const dataElements = findDataElements(arrayClass, resultContainerClass);
    tryGetResult(arrayTool.maxAscendingSequence.bind(arrayTool), dataElements.array, dataElements.resultContainer);
}