function handleArraySorter(arrayClass, algorithmClass, resultContainerClass){
    const array = document.getElementsByClassName(arrayClass)[0].value.split(",").map(item => parseInt(item));
    const algorithm = document.getElementsByClassName(algorithmClass)[0].value;
    const resultContainer = document.getElementsByClassName(resultContainerClass)[0];

    try{
        const result = algorithms.get(algorithm)(array);
        if(!result){
            throw new InvalidArrayError("Invalid array", array);
        }
        if(array.some(element => isNaN(element))){
            throw new InvalidArrayError("Invalid array", array);
        }
        resultContainer.innerHTML = result;
    }
    catch(e){
        resultContainer.innerHTML = e.message;
    }
}

const algorithms = new Map();
algorithms.set(BUBBLE_SORT, arraySorter.bubbleSort.bind(arraySorter));
algorithms.set(QUICK_SORT, arraySorter.quickSort.bind(arraySorter));
algorithms.set(HEAP_SORT, arraySorter.heapSort.bind(arraySorter));
algorithms.set(INSERTION_SORT, arraySorter.insertionSort.bind(arraySorter));
algorithms.set(SELECTION_SORT, arraySorter.selectionSort.bind(arraySorter));