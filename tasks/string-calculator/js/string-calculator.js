const stringCalculator = {
    calculate(expression){
        const operators = this.getOperators(expression);
        const numbers = this.getNumbers(expression);
        let operations = numbers > operators
            ? this.getOperations(numbers, operators)
            : this.getOperations(operators, numbers);
        operations = this.executePriorityOperations(operations);
        return this.sumOrSubItems(operations);
    },

    getOperators(expression){
        const operators = expression.match(/[*/+-]/g);
        return operators ? operators : [];
    },

    getNumbers(expression){
        return expression.match(/\d+(\.\d+)?/g).map(num => num.includes(".") ? parseFloat(num) : parseInt(num));
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
        let operations = sourceOperations.slice();
        let multiplicationIndex = operations.indexOf('*');
        let divisionIndex = operations.indexOf('/');

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
        let operations = sourceOperations.slice(),
            result = operations[0];

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