const arraySorter = {
    bubbleSort(array, ascending = true){
        let resultArray = array.slice();

        let comparisonExpression = ascending ? (a,b) => {return a > b} : (a,b) => {return a < b};
        for (let i = 0; i < resultArray.length; i++) {
            for (let j = 0; j < resultArray.length; j++) {
                if (comparisonExpression(resultArray[j], resultArray[j+1])) {
                    [resultArray[j], resultArray[j + 1]] = [resultArray[j + 1], resultArray[j]];
                }
            }
        }
        return resultArray;
    },

    quickSort(sourceArray, leftBorder = 0, rightBorder = sourceArray.length - 1, ascending = true){
        let array = sourceArray.slice();

        const separation = (array, pivot, leftBorder, rightBorder) => {
            let separationIndex = leftBorder;

            for(let i = leftBorder; i < rightBorder; i++){
                if(array[i] < array[pivot]){
                    [array[i], array[separationIndex]] = [array[separationIndex], array[i]];
                    separationIndex++;
                }
            }
           [array[rightBorder], array[separationIndex]] = [array[separationIndex], array[rightBorder]];
           return separationIndex;
        };

        let pivot,
            separationIndex;

        if(leftBorder < rightBorder){
            pivot = rightBorder;
            separationIndex = separation(array, pivot, leftBorder, rightBorder);
            this.quickSort(array, leftBorder, separationIndex - 1);
            this.quickSort(array, separationIndex + 1, rightBorder);
        }
        return array;
    },

    heapSort(sourceArray){
        let array = sourceArray.slice();
        let maxHeap = (input, i, arrayLength) => {
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
                maxHeap(input, max);
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
    },

    insertionSort(sourceArray) {
        let array = sourceArray.slice(),
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
    },

    selectionSort(sourceArray) {
        let array = sourceArray.slice(),
            min,
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