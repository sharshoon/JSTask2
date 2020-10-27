function handleArraySorter(arrayClass, algorithmClass, resultContainerClass){
    const array = document.getElementsByClassName(arrayClass)[0].value.split(",").map(item => +item);
    const algorithm = document.getElementsByClassName(algorithmClass)[0].value;
    const resultContainer = document.getElementsByClassName(resultContainerClass)[0];

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

const algorithms = new Map();
algorithms.set("bubble-sort", arraySorter.bubbleSort.bind(arraySorter));
algorithms.set("quick-sort", arraySorter.quickSort.bind(arraySorter));
algorithms.set("heap-sort", arraySorter.heapSort.bind(arraySorter));
algorithms.set("insertion-sort", arraySorter.insertionSort.bind(arraySorter));
algorithms.set("selection-sort", arraySorter.selectionSort.bind(arraySorter));