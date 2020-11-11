const numberConverter = {
    binaryToDecimal(number){
        let result = 0,
            rank = 1;
        for(let i = 0; i < number.length; i++) {
            result += number[i] == 1 ? rank : 0;
            rank *= 2;
        }
        return result;
    },

    decimalToBinary(numberArray) {
        console.log(numberArray);
        let number = parseInt(numberArray.reverse().reduce((accumulator, elem) => accumulator += elem, "")),
            result = "";

        while(number > 0){
            result += number % 2 ? "1" : "0";
            number = (number - number % 2) / 2; // integer division
        }

        return result.split("").reverse().join("") || "0";
    },

    customToCustom(sourceNumber, sourceNotation, destNotation){
        const nextNumber = (sourceNotation, destNotation, size) => {
            // next digit in new notation
            let temp = 0;
            for (let i = 0; i < size; i++){
                temp = temp*sourceNotation + number[i];
                number[i] = (temp - temp % destNotation) / destNotation;
                temp = temp % destNotation;
            }
            return temp;
        }

        const isZeroArray = (number) => {
            return number.every(item => item === 0);
        }

        const intToChar = (num) => {
            if ( num >= 0 && num <= 9 ){
                return String.fromCharCode(num + '0'.charCodeAt(0));
            }
            else{
                return String.fromCharCode(num + 'A'.charCodeAt(0) - 10);
            }
        }

        const number = sourceNumber.reverse().map(numberElement => {
            // convert char to int
            let item = numberElement.toString();
            if(item.charCodeAt(0) >= '0'.charCodeAt(0) &&  item.charCodeAt(0) <= '9'.charCodeAt(0) &&
                (item.charCodeAt(0) - '0'.charCodeAt(0) < sourceNotation)){
                return item.charCodeAt(0) - '0'.charCodeAt(0);
            }
            else{
                if(item.charCodeAt(0) >= 'A'.charCodeAt(0) && item.charCodeAt(0) <= 'Z'.charCodeAt(0)
                    && (item.charCodeAt(0) - 'A'.charCodeAt(0)) < sourceNotation){
                    return item.charCodeAt(0) - 'A'.charCodeAt(0) + 10;
                }
                else {
                    return null;
                }
            }
        });

        let b = [],
            size = 0;
        do {
            b.push(nextNumber(sourceNotation, destNotation, number.length));
            size++;
        } while( !isZeroArray(number));

        let result = "";
        for (let i = b.length - 1; i >= 0; i--){
            result += intToChar(b[i]);
        }
        return result;
    }

}