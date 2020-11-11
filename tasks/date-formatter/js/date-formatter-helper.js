const dateFormatterHelper = {
    dateValidityCheck(dateObj, year, month, day){
        if(dateObj && parseInt(month) === dateObj.getMonth() + 1 && parseInt(day) === dateObj.getDate()){
            return true;
        }

        return false;
    },

    getCharsLength(resultFormat, char, possibleVariants){
        let reg = new RegExp(char,"g");
        const charsLength = resultFormat.match(reg).length;
        if(!possibleVariants.some(length => length === charsLength)){
            throw new InvalidDateRegexError("Invalid chars in date Regex");
        }
        return charsLength;
    },

    trimInputDate(date){
        return date.trim();
    },

    getDateObject(searchResults, reg){
        return new Date(searchResults[0]
            .replace(reg, `${parseInt(searchResults.groups.year)}-${parseInt(searchResults.groups.month)}-${searchResults.groups.day}`));
    },

    getDatePart(date, dateFormat, datePart){
        return date.slice(dateFormat.indexOf(datePart), dateFormat.length - dateFormat.split("").reverse().join("").indexOf(datePart));
    }
}