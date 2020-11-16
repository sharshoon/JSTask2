class ArraySorter {
    bubbleSort(array, ascending = true){
        arrayHelper.emptyArrayCheck(array);
        const resultArray = [...array];

        let comparisonExpression = ascending ? (a,b) => {return a > b} : (a,b) => {return a < b};
        for (let i = 0; i < resultArray.length; i++) {
            for (let j = 0; j < resultArray.length; j++) {
                if (comparisonExpression(resultArray[j], resultArray[j+1])) {
                    [resultArray[j], resultArray[j + 1]] = [resultArray[j + 1], resultArray[j]];
                }
            }
        }
        return resultArray;
    }

    #quickSortInner(array){
        if (array.length < 2) {
            return array;
        }
        let pivot = array[0];
        const left = [],
            right = [];

        for (let i = 1; i < array.length; i++) {
            if (pivot > array[i]) {
                left.push(array[i]);
            } else {
                right.push(array[i]);
            }
        }
        return this.#quickSortInner(left).concat(pivot, this.#quickSortInner(right));
    }

    quickSort(sourceArray){
        arrayHelper.emptyArrayCheck(sourceArray);
        const array = [...sourceArray];
        return this.#quickSortInner(array);
    }

    heapSort(sourceArray){
        arrayHelper.emptyArrayCheck(sourceArray);
        const array = [...sourceArray];
        const maxHeap = (input, i, arrayLength) => {
            const leftBorder = 2 * i + 1,
                rightBorder = 2 * i + 2;
            let max = i;

            if (leftBorder < arrayLength && input[leftBorder] > input[max]){
                max = leftBorder;
            }
            if (rightBorder < arrayLength && input[rightBorder] > input[max]){
                max = rightBorder;
            }
            if (max !== i){
                [input[i], input[max]] = [input[max], input[i]];
                maxHeap(input, max, arrayLength);
            }
        }

        let arrayLength = array.length;
        for (let i = Math.floor(arrayLength / 2); i >= 0; i -= 1){
            maxHeap(array, i, arrayLength);
        }

        for (let i = array.length - 1; i > 0; i--){
            [array[0], array[i]] = [array[i], array[0]];
            arrayLength--;

            maxHeap(array, 0, arrayLength)
        }
        return array;
    }

    insertionSort(sourceArray) {
        arrayHelper.emptyArrayCheck(sourceArray);
        const array = [...sourceArray],
            length = sourceArray.length;
        for (let i = 1; i < length; i++) {
            let currentElement = array[i],
                j = i-1;
            while (j >= 0 && currentElement < array[j]) {
                array[j+1] = array[j];
                j--;
            }
            array[j+1] = currentElement;
        }
        return array;
    }

    selectionSort(sourceArray) {
        arrayHelper.emptyArrayCheck(sourceArray);
        const array = [...sourceArray];
        let min,
            length = sourceArray.length;

        for(let i = 0; i < length; i++){
            min = i;
            for(let  j = i+1; j < length; j++){
                if(array[j] < array[min]){
                    min = j;
                }
            }
            [array[i], array[min]] = [array[min], array[i]];
        }
        return array;
    }
}

const arraySorter = new ArraySorter();