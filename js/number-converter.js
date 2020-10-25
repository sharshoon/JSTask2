const numberConverter = {
    binaryToDecimal(number){
        let result = 0,
            rank = 1;
        for(let i = 0; i < number.length; i++) {
            result += number[i] === "1" ? rank : 0;
            rank *= 2;
        }
        return result;
    },

    decimalToBinary(numberArray) {
        let number = parseInt(numberArray.reverse().reduce((accumulator, elem) => accumulator += elem, "")),
            result = "";

        while(number > 0){
            result += number % 2 ? "1" : "0";
            number = (number - number % 2) / 2; // integer division
        }

        return result.split("").reverse().join("") || "0";
    }

}