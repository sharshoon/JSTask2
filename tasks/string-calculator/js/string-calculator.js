const stringCalculator = {
    calculate(expression){
        const numbers = this.getNumbers(expression);
        const operators = this.getOperators(expression, numbers);
        let operations = this.getOperations(numbers, operators);
        operations = this.executePriorityOperations(operations);
        return this.sumOrSubItems(operations);
    },

    getOperators(expression, numbers){
        const operators = expression.match(/[*/+-]/g);
        if(!operators){
            return [];
        }

        const consIndexes = numbers.map( (number, index) => number < 0 ? index : -1);

        for(let i = 0; i < consIndexes.length; i++){
            if(consIndexes[i] === 0){
                operators.shift();
            }
            else if(consIndexes[i] !== -1){
                operators.splice(consIndexes[i],1);
            }
        }

        return operators;
    },

    getNumbers(expression){
        const numbers = expression.match(/([-+*\/]-)?\d+(\.\d+)?/g).map(num => {
            const number = num.match(/(-)?\d+(\.\d+)?/)[0];
            return num.includes(".") ? parseFloat(number) : parseInt(number)
        });

        if(expression && expression[0] === '-'){
            numbers[0] = -numbers[0];
        }

        return numbers;
    },

    getOperations(arr1, arr2){
        let firstArr = arr1.slice(),
            secondArr = arr2.slice(),
            result = [];

        while(firstArr.length > 0){
            result.push(firstArr.shift());
            if(secondArr.length > 0) {
                result.push(secondArr.shift());
            }
        }

        return result
    },
    // performs multiplication and division
    executePriorityOperations(sourceOperations){
        const operations = sourceOperations.slice();
        const multiplicationIndex = operations.indexOf('*');
        const divisionIndex = operations.indexOf('/');

        if(multiplicationIndex !== -1 || divisionIndex !== -1){
            let operation,
                index;
            if(multiplicationIndex !== -1 && (multiplicationIndex < divisionIndex || divisionIndex === -1)){
                operation = operations[multiplicationIndex-1] * operations[multiplicationIndex+1];
                index = multiplicationIndex;
            }
            else{
                operation = operations[divisionIndex-1] / operations[divisionIndex+1];
                index = divisionIndex;
            }
            operations.splice(index-1,3,operation);
            return this.executePriorityOperations(operations);
        }
        else {
            return operations;
        }
    },

    // performs addition and subtraction
    sumOrSubItems(sourceOperations){
        const operations = sourceOperations.slice();
        let result = operations[0];

        let i = 1;
        while(i < operations.length){
            if(operations[i] === "+"){
                result += operations[i+1];
            }
            else if(operations[i] === "-"){
                result -= operations[i+1];
            }
            i+=2;
        }

        return result;
    }
}