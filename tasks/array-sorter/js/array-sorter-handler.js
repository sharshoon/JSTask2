function handleArraySorter(e){
    const algorithms = new Map();
    algorithms.set("bubble-sort", arraySorter.bubbleSort);
    algorithms.set("quick-sort", arraySorter.quickSort);
    algorithms.set("heap-sort", arraySorter.heapSort);
    algorithms.set("insertion-sort", arraySorter.insertionSort);
    algorithms.set("selection-sort", arraySorter.selectionSort);

    const array = document.getElementsByClassName("array-sorter__input")[0].value.split(",").map(item => +item);
    const algorithm = document.getElementsByClassName("array-sorter__select-algorithm")[0].value;
    const resultContainer = document.getElementsByClassName("array-sorter__result-container")[0];

    try{
        const result = algorithms.get(algorithm)(array);
        if(!result || (Array.isArray(result) && result.includes(NaN))){
            throw new Error("Invalid array");
        }
        resultContainer.innerHTML = result;
    }
    catch(e){
        resultContainer.innerHTML = e.message;
    }
}

document.getElementsByClassName("array-sorter__button")[0].addEventListener("click", handleArraySorter);