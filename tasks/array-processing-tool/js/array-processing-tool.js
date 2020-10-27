const arrayTool = {
    getMaxSubSumO1(array) {
        if(array.length === 0){
            return 0;
        }

        let maxSum = 0,
            sum = 0;

        for(let elem of array){
            sum += elem;
            maxSum = maxSum > sum ? maxSum : sum;

            sum = sum >= 0 ? sum : 0;
        }

        return maxSum;
    },

    getMaxSubSumO2(array){
        if(array.length === 0){
            return 0;
        }

        let options = [];
        for(let i = 0; i < array.length; i++){
            let sum = 0;

            for(let j = i; j < array.length; j++){
                sum += array[j];
                options.push(sum);
            }

            const maxValue = Math.max(...options);
            options = [maxValue];
        }

        const max = Math.max(...options);

        return max >= 0 ? max : 0;
    },

    findMax(array){
        if(array.length === 0){
            return 0;
        }
        return array.reduce((accumulator, element) => accumulator < element ? element : accumulator, Number.MIN_SAFE_INTEGER);
    },

    findMin(array){
        if(array.length === 0){
            return 0;
        }
        return array.reduce((accumulator, element) => accumulator > element ? element : accumulator, Number.MAX_SAFE_INTEGER);
    },

    findMedian(array){
        if(array.length === 0){
            return 0;
        }
        const sortedArray = array.sort();

        if(array.length % 2 === 1){
            return sortedArray[(array.length-1) / 2];
        }
        else{
            return (sortedArray[array.length / 2] + sortedArray[(array.length / 2) - 1]) / 2;
        }
    },

    maxAscendingSequence(array){
        if(array.length === 0){
            return [];
        }

        let startIndex = 0,
            startMax = 0,
            stopMax = 0;
        for(let i = 0; i < array.length - 1; i++){
            if(array[i+1] <= array[i] && i+1 - startIndex >= stopMax - startMax){
                startMax = startIndex;
                stopMax = i+1;

                startIndex = i+1;
            }
        }

        if(stopMax === 0){
            stopMax = array.length;
        }
        return stopMax - startMax > 1 ? array.slice(startMax, stopMax) : [] ;
    }
};