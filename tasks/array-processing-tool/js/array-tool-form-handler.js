function handleMaxSumO1(e){
    let array = document.getElementsByClassName("max-sum1__input")[0].value;
    array = array.trim() !== "" ? array.split(",").map(item => +item) : [];

    const resultContainer = document.getElementsByClassName("max-sum1__result-container")[0];
    resultContainer.innerHTML = arrayTool.getMaxSubSumO1(array);
}

function handleMaxSumO2(e){
    let array = document.getElementsByClassName("max-sum2__input")[0].value;
    array = array.trim() !== "" ? array.split(",").map(item => +item) : [];

    const resultContainer = document.getElementsByClassName("max-sum2__result-container")[0];
    resultContainer.innerHTML = arrayTool.getMaxSubSumO2(array);
}

function handleFindMax(e){
    let array = document.getElementsByClassName("find-max__input")[0].value;
    array = array.trim() !== "" ? array.split(",").map(item => +item) : [];

    const resultContainer = document.getElementsByClassName("find-max__result-container")[0];
    resultContainer.innerHTML = arrayTool.findMax(array);
}

function handleFindMin(e){
    let array = document.getElementsByClassName("find-min__input")[0].value;
    array = array.trim() !== "" ? array.split(",").map(item => +item) : [];

    const resultContainer = document.getElementsByClassName("find-min__result-container")[0];
    resultContainer.innerHTML = arrayTool.findMin(array);
}

function handleFindMedian(e){
    let array = document.getElementsByClassName("find-median__input")[0].value;
    array = array.trim() !== "" ? array.split(",").map(item => +item) : [];

    const resultContainer = document.getElementsByClassName("find-median__result-container")[0];
    resultContainer.innerHTML = arrayTool.findMedian(array);
}

function handleMaxSequence(e){
    let array = document.getElementsByClassName("max-sequence__input")[0].value;
    array = array.trim() !== "" ? array.split(",").map(item => +item) : [];

    const resultContainer = document.getElementsByClassName("max-sequence__result-container")[0];
    resultContainer.innerHTML = arrayTool.maxAscendingSequence(array);
}

document.getElementsByClassName("max-sum1__button")[0].addEventListener("click", handleMaxSumO1);
document.getElementsByClassName("max-sum2__button")[0].addEventListener("click", handleMaxSumO2);
document.getElementsByClassName("find-max__button")[0].addEventListener("click", handleFindMax);
document.getElementsByClassName("find-min__button")[0].addEventListener("click", handleFindMin);
document.getElementsByClassName("find-median__button")[0].addEventListener("click", handleFindMedian);
document.getElementsByClassName("max-sequence__button")[0].addEventListener("click", handleMaxSequence);