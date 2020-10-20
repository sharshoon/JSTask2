const arrayTool = {
    getMaxSubSumO1(array) {
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
        return Math.max(...array);
    },

    findMin(array){
        return Math.min(...array);
    },

    findMedian(array){
        const sortedArray = array.sort();

        if(array.length % 2 === 1){
            return sortedArray[(array.length-1) / 2];
        }
        else{
            return (sortedArray[array.length / 2] + sortedArray[(array.length / 2) - 1]) / 2;
        }
    },

    maxAscendingSequence(array){
        let startIndex = 0,
            startMax = 0,
            stopMax = 0;
        for(let i = 0; i < array.length - 1; i++){
            if( array[i+1] <= array[i] && i - startIndex >= stopMax - startMax){
                startMax = startIndex;
                stopMax = i+1;

                startIndex = i+1;
            }
        }

        return array.slice(startMax, stopMax);
    }
};